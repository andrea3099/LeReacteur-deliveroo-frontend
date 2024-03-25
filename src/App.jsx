import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--2khyn7kvbl6k.code.run/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement </span>
      ) : (
        <div>
          <header>
            <Header></Header>
            <div className="main-container center">
              <div className="info-resto">
                <h1>{data.restaurant.name}</h1>
                <p>{data.restaurant.description}</p>
              </div>
              <img src={data.restaurant.picture} alt="img-acceuil" />
            </div>
          </header>
          <main>
            <section>
              {data.categories.map((elem, index) => {
                return (
                  <div className="center" key={index}>
                    {elem.meals[index] && <h1>{elem.name}</h1>}
                    <div className="container-meals">
                      {elem.meals.map((meal) => {
                        return (
                          <div key={meal.id} className="presentation-container">
                            <div className="presentation-container-text">
                              <div className="presentation-meal">
                                <h2>{meal.title}</h2>
                                <p>{meal.description}</p>
                                <div className="price-popular">
                                  <span className="price">{meal.price} €</span>
                                  {meal.popular && (
                                    <span className="icon-STAR_FILL popular">
                                      Populaire
                                    </span>
                                  )}
                                </div>
                              </div>
                              {meal.picture && (
                                <div className="images-meal">
                                  <img src={meal.picture} alt="img-repas" />
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
