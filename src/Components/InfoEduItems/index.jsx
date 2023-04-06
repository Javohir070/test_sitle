import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemWrap } from "./style";
import {
  faGraduationCap,
  faUserTie,
  faPersonChalkboard,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const InfoEduItems = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);
  return (
    <div className="container-wrap">
      <div className="general-container">
        <div className="container">
          <div className=" displayFlex">
            <div
              className="responsive-item"
              data-aos="fade-up-right"
              data-aos-duration="500"
            >
              <ItemWrap>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size={"3x"}
                  color={"white"}
                />
                <h1>9</h1>
                <p>Факультеты</p>
              </ItemWrap>
            </div>
            <div
              className="responsive-item"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <ItemWrap>
                <FontAwesomeIcon icon={faUserTie} size={"3x"} color={"white"} />
                <h1>24000</h1>
                <p>Студенты</p>
              </ItemWrap>
            </div>
            <div
              className="responsive-item"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <ItemWrap>
                <FontAwesomeIcon
                  icon={faPersonChalkboard}
                  size={"3x"}
                  color={"white"}
                />
                <h1>2100</h1>
                <p>Учителя</p>
              </ItemWrap>
            </div>
            <div
              className="responsive-item"
              data-aos="fade-up-right"
              data-aos-duration="2000"
            >
              <ItemWrap>
                <FontAwesomeIcon
                  icon={faSuitcase}
                  size={"3x"}
                  color={"white"}
                />
                <h1>54</h1>
                <p>Партнеры</p>
              </ItemWrap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoEduItems;
