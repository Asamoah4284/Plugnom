import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideMenu({ isSidebarOpen, toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuhome) => {
    setOpenMenu(openMenu === menuhome ? null : menuhome);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.getElementById("side-bar").classList.add("show");
      document.getElementById("anywhere-home").classList.add("bgshow");
    } else {
      document.getElementById("side-bar").classList.remove("show");
      document.getElementById("anywhere-home").classList.remove("bgshow");
    }
  }, [isSidebarOpen]);
  return (
    <>
      <div
        id="side-bar"
        className={`side-bar header-two ${isSidebarOpen ? "show" : ""}`}
      >
        <button
          className="close-icon-menu"
          aria-label="Close Menu"
          onClick={toggleSidebar}
        >
          <i className="fa-sharp fa-thin fa-xmark" />
        </button>
        {/* mobile menu area start */}
        <div className="mobile-menu-main d-block">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li className="has-droupdown">
                <Link to="#" className="main" onClick={() => toggleMenu(1)}>
                  Home
                </Link>
                <ul
                  className={`submenu ${
                    openMenu === 1 ? "mm-collapse mm-show" : "mm-collapse"
                  }`}
                >
                  <li>
                    <Link className="mobile-menu-link" to="/home">
                      Home One
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-menu-link" to="/home-two">
                      Home Two
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-menu-link" to="/home-three">
                      Home Three
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link to="#" className="main" onClick={() => toggleMenu(2)}>
                  Hosting
                </Link>
                <ul
                  className={`submenu ${
                    openMenu === 2 ? "mm-collapse mm-show" : "mm-collapse"
                  }`}
                >
                  <li>
                    <Link className="mobile-menu-link" to="/about">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link className="mobile-menu-link" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="has-droupdown">
                <Link to="#" className="main" onClick={() => toggleMenu(4)}>
                  Domain
                </Link>
                <ul
                  className={`submenu ${
                    openMenu === 4 ? "mm-collapse mm-show" : "mm-collapse"
                  }`}
                >
                  <li>
                    <Link className="mobile-menu-link" to="/domain-checker">
                      Domain Checker
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-menu-link" to="/domain-transfer">
                      Domain Transfer
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link to="#" className="main" onClick={() => toggleMenu(5)}>
                  Technology
                </Link>
                <ul
                  className={`submenu ${
                    openMenu === 5 ? "mm-collapse mm-show" : "mm-collapse"
                  }`}
                >
                  <li>
                    <Link className="mobile-menu-link" to="/technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-menu-link" to="/data-center">
                      Data Center
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-menu-link" to="/game-details">
                      Game Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link to="#" className="main" onClick={() => toggleMenu(6)}>
                  Help Center
                </Link>
                <ul
                  className={`submenu ${
                    openMenu === 6 ? "mm-collapse mm-show" : "mm-collapse"
                  }`}
                >
                  <li>
                    <Link className="mobile-menu-link" to="/knowledgebase">
                      Knowledgebase
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <ul className="social-area-one pl--20 mt--100">
            <li>
              <Link
                to="https://www.linkedin.com"
                aria-label="social-link"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.x.com"
                aria-label="social-link"
                target="_blank"
              >
                <i className="fa-brands fa-twitter" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com"
                aria-label="social-link"
                target="_blank"
              >
                <i className="fa-brands fa-youtube" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com"
                aria-label="social-link"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f" />
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile menu area end */}
      </div>
      <div id="anywhere-home" onClick={toggleSidebar}></div>
    </>
  );
}

export default SideMenu;
