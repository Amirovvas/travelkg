import React from "react";
import scss from "./aboutUs.module.scss";
const AboutUs = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.aboutUs}>
            <h2>О нас</h2>
            <p>
              Добро пожаловать в TravelKG — туристическую компанию, которая
              помогает путешественникам открывать самые красивые места
              Кыргызстана и мира.
            </p>
          </div>
          <div className={scss.aboutUs}>
            <h2>Кто мы</h2>
            <p>
               TravelKG — современная туристическая компания, специализирующаяся
              на организации туров, экскурсий и путешествий. Мы предлагаем
              качественный сервис, индивидуальный подход и незабываемые
              впечатления для каждого клиента.
            </p>
          </div>
          <div className={scss.aboutUs}>
            <h2>Наша миссия</h2>
            <p>
              Наша миссия — сделать путешествия доступными, комфортными и
              безопасными, помогая людям открывать новые культуры, страны и
              удивительные места
            </p>
          </div>
          <div className={scss.aboutUs}>
            <h2>О нас</h2>
            <p>
              Добро пожаловать в TravelKG — туристическую компанию, которая
              помогает путешественникам открывать самые красивые места
              Кыргызстана и мира.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
