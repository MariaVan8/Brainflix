import mohan from "../../assets/Images/Mohan-muruge.jpg";
import logo from "../../assets/Logo/logo.svg";
import Button from "../Button/Button";
import "../PageHeader/PageHeader.scss";
import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <header className="header">
      <Link to="/" title="HomePage" className="header__logo-container">
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
        <Link to="/upload" title="UploadPage" className="header__link">
          <Button className="header__button" text="Upload" />
        </Link>
      </form>
    </header>
  );
}

export default PageHeader;
