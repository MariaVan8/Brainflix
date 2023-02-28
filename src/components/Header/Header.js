import logo from "../../assets/Logo/logo.svg";
function Header() {
  return (
    <header>
      <div className="header__container">
        <img src={logo}></img>
      </div>
      <div className="header__search">
        <form action="/search" method="get">
          <input type="text" name="q" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
