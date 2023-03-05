import mohan from "../../assets/Images/Mohan-muruge.jpg";
import logo from "../../assets/Logo/logo.svg";
import Button from "../Button/Button";
import "../Header/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <form className="header__form">
        <input
          className="header__box"
          type="text"
          name="q"
          placeholder="Search"
        />
        <img className="header__image" src={mohan} />
        <Button />
      </form>
    </header>
  );
}

export default Header;
