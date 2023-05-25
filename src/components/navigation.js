import logo from "../logo.svg";

function Navigation() {
  return (
    <div className="Navbar">
      <img src={logo} alt="Sparebank 1" className="logo" />
      <div className="ffe-header__border">
        <div className="ffe-header__wrapper">
          <nav className="ffe-header__site-nav" role="navigation">
            <ul className="ffe-header__list ffe-header__site-nav-list">
              <li className="ffe-header__list-item">
                <a className="ffe-header__link ffe-small-text" href="/">
                  Oppgaven
                </a>
              </li>
              <li className="ffe-header__list-item">
                <a className="ffe-header__link ffe-small-text" href="/oversikt">
                  Oversikt
                </a>
              </li>
              <li className="ffe-header__list-item">
                <a
                  className="ffe-header__link  ffe-small-text"
                  href="/betaling"
                >
                  Betaling
                </a>
              </li>
              <li className="ffe-header__list-item">
                <a className="ffe-header__link ffe-small-text" href="/sparing">
                  Sparing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
