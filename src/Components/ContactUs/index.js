import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaMapMarkerAlt, FaTelegram } from "react-icons/fa";
import "./style.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="head-text">
          <h2>
          Связаться с нами
          </h2>
         
        </div>
        <div className="row contact-main">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="contact-box">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 contact-col">
                  <div className="col-section">
                    <div className="contact-icons">
                      <MdPhone className="contact-i" />
                    </div>
                    <div className="contact-text">
                      <h6>Телефон</h6>
                      <p>+99870 716-68-05</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 contact-col">
                  <div className="col-section">
                    <div className="contact-icons">
                      <MdEmail className="contact-i" />
                    </div>
                    <div className="contact-text">
                      <h6>Электронная почта</h6>
                      <p>info@tuit.uz</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="our-address">
                <div className="col-section">
                  <div className="contact-icons">
                    <FaMapMarkerAlt className="contact-i" />
                  </div>
                  <div className="contact-text">
                    <h6>Адрес</h6>
                    <p>
                    Ташкент 100084, улица Шох Амира Темура дом 108{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="our-telegram">
                <div className="col-section">
                  <div className="contact-icons">
                    <FaTelegram className="contact-i" />
                  </div>
                  <div className="contact-text">
                    <h6>Телеграмма</h6>
                    <p>t.me/tvchdpi2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 last-col-contact">
            <div className="our-map">
              <iframe
                title="Toshkent axborot texnologiyalari universiteti"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5255070604003!2d69.28454041575789!3d41.34093017926856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCY0L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0KLQtdGF0L3QvtC70L7Qs9C40Lk6!5e0!3m2!1sru!2s!4v1680602383382!5m2!1sru!2s"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
