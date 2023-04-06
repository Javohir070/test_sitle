import React from "react";
import menuIcons from "../../Assets/Icons/menu-icons-2.png";
import closeIcons from "../../Assets/Icons/close-icon-47.png";
// import icon from "../../Assets/Img/Icon.png";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(true);
  const [isDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    if (!active) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "scroll";
    }
  }, [active]);

  window.addEventListener("scroll", function () {
    location.pathname === "/"
      ? this.document
          .querySelector(".header")
          .classList.toggle("sticy", window.scrollY > 0)
      : this.document
          .querySelector(".header")
          .classList.toggle("sticy", this.window.scrollY >= 0);
  });

  const onActiveNav = () => {
    setActive(!active);
    document.querySelector(".header").classList.toggle("active");
    document.querySelector(".head-navLink").classList.toggle("active");
  };

  return (
    <div
      className={`header ${location.pathname === "/" ? "" : " header-fixed"}`}
      id="headerId"
    >
      <div className="container">
        <div className="head-container">
          {/* <div className="logo">
            <img src={icon} alt="icon" />
          </div> */}
          <div className="menu-responsive">
            <div className="menu-responsive-btn" onClick={() => onActiveNav()}>
              <img src={menuIcons} alt="menu-icon" />
            </div>
          </div>
          <div className="menu-responsive2">
            <div className="menu-responsive-btn" onClick={() => onActiveNav()}>
              <img src={closeIcons} alt="menu-icon" />
            </div>
          </div>
          <div className="head-navLink">
            <ul>
              <li>
                <a href="/">главный</a>
              </li>
              <li>
                <a href="/lectures">Лекции</a>
              </li>
              {/* <li>
                <a href="/practices">Amaliyotlar</a>
              </li> */}
              <li>
                <a href="/student/exams-list/current">Tест</a>
              </li>
              {/* <li>
                <span onClick={() => setIsDropDown(!isDropDown)}>
                  Testlar{" "}
                  <FontAwesomeIcon
                    icon={isDropDown ? faAngleUp : faAngleDown}
                  />
                </span>
                <div className={isDropDown ? "dropdown active" : "dropdown"}>
                  <ul>
                    <li>
                      <a href="/student/exams-list/current">Test boshlash</a>
                    </li>
                    {/* <li>
                      <a href="/student/exams-list/intermediate">
                        Oraliq nazorat
                      </a>
                    </li>
                    <li>
                      <a href="/student/exams-list/final">Yakuniy nazorat</a>
                    </li> */}
                  {/* </ul>
                </div>
              </li>  */}
              <li>
                <a href="/sign-in">Регистрация
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
