import mohan from "../../assets/Images/Mohan-muruge.jpg";
import logo from "../../assets/Logo/logo.svg";
import Button from "../Button/Button";
import "../Header/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" title="HomePage">
        <img className="header__logo" src={logo} />
      </Link>
      <form className="header__form">
        <input
          className="header__box"
          type="text"
          name="q"
          placeholder="Search"
        />
        <img className="header__image" src={mohan} />
        <Button className="header__button" text="Upload" />
      </form>
    </header>
  );
}

export default Header;
