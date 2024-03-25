import Logo from "../assets/images/logo-teal.svg";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container center">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};
export default Header;
