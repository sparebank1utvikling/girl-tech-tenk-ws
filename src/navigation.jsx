import logo from "./bilder/logo.svg";

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
                  Introduksjon
                </a>
              </li>
              <li className="ffe-header__list-item">
                <a className="ffe-header__link ffe-small-text" href="/banken">
                  Banken
                </a>
              </li>
              <li className="ffe-header__list-item">
                <a
                  className="ffe-header__link  ffe-small-text"
                  href="/slik-skal-det-se-ut"
                >
                  Slik skal det se ut
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
