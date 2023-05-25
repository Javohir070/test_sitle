import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import OutlineBtn from "../OutlineBtn";
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";

import { Parallax, Navigation, Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function MainBanner() {
  window.addEventListener("scroll", function () {
    document
      .querySelector(".scrollTotop-btn")
      .classList.toggle("active", window.scrollY > 500);
  });

  setTimeout(() => {
    document.querySelector(".loaderBox").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".loaderBox").style.display = "none";
    }, 1000);
  }, 2000);

  return (
    <>
      <div className="loaderBox">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/*  scroll js  */}
      <a href="#home" className="scrollTotop-btn">
        <FontAwesomeIcon icon={faAngleUp} />
      </a>
      {/* /scroll js */}
      <div id="home" className="mainBanner" data-swiper-parallax="-23%">
        <Swiper
          rewind={true}
          navigation={true}
          speed={600}
          parallax={true}
          modules={[Navigation, Parallax, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="generalSwiper generalSwiper1">
              <div className="generalSwiperBg">
                <div className="swiper-text">
                  {/* <p data-swiper-parallax="-50%">
                  Хорошее образование, чтобы быть хорошим
                  </p> */}
                  <h3 data-swiper-parallax="-40%" >Интерактивные кейсы для изучения курса 
             </h3>
                  <h3 data-swiper-parallax="-30%">
             Безопасность жизнедеятельности 
                  </h3>
                  {/* <p>Образование — учитесь у разработчиков</p> */}
                  <div className="swiper-btn" data-swiper-parallax="-20%">
                    
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="generalSwiper generalSwiper2">
              <div className="generalSwiperBg">
                <div className="swiper-text">
                  {/* <p data-swiper-parallax="-50%">
                  Хорошее образование, чтобы быть хорошим
                  </p> */}
                  <h3 data-swiper-parallax="-40%">Интерактивные кейсы для изучения курса 
             </h3>
                  <h3 data-swiper-parallax="-30%">
                  Безопасность жизнедеятельности 
                  </h3>
                  <div className="swiper-btn" data-swiper-parallax="-20%">
           
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="generalSwiper generalSwiper3">
              <div className="generalSwiperBg">
                <div className="swiper-text">
                  {/* <p data-swiper-parallax="-50%">
                  Хорошее образование, чтобы быть хорошим
                  </p> */}
                  <h3 data-swiper-parallax="-40%">Интерактивные кейсы для изучения курса     
             </h3>
             <h3 data-swiper-parallax="-40%">Безопасность жизнедеятельности
             </h3>
                  {/* <p data-swiper-parallax="-30%">
                  
             пострадавшему от действия тока
                  </p>  */}
                   {/* <p>Образование — учитесь у разработчиков</p> */}
                  <div className="swiper-btn" data-swiper-parallax="-20%">
                   
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default MainBanner;
