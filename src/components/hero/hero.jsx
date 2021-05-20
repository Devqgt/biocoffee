import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero-image.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">BIO COFFEE</h1>
            <p className="weight100 font12">
            El café orgánico es el tipo de café producido que no necesita aditivos, pesticidas y herbicidas, para su elaboración. Con esta técnica se logra crear un café de alta calidad además de contribuir con la cálidad del suelo logrando hacerlo mas fértil, y de allí parte la importancia del nombre de Bio Coffee un café orgánico, que cumpla con los estándares requeridos 
            y que le proporcione a tu salud los beneficios necesarios que contiene el café. Además, contribuyendo con el medio ambiente evitando la emisión de gases de efecto invernadero nocivos para la salud del planeta.  
            </p>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
