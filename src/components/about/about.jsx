import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="SOBRE NOSOTROS." />
      <p className="font12">
      El café orgánico es el tipo de café producido que no necesita aditivos, pesticidas y herbicidas, para su elaboración. Con esta técnica se logra crear un café de alta calidad además de contribuir con la cálidad del suelo logrando hacerlo mas fértil, y de allí parte la importancia del nombre de Bio Coffee un café orgánico, que cumpla con los estándares requeridos y que le proporcione a tu salud los beneficios necesarios que contiene el café. 
      Además, contribuyendo con el medio ambiente evitando la emisión de gases de efecto invernadero nocivos para la salud del planeta.
      </p>
      <p className="font12"> 
      La creación de Bio Coffee es lograr crear una cultura de café para que mas guatemaltecos y guatemaltecas puedan degustar de las distintas variedades. Además, contribuimos con la economía local lo cual nos permite impulsar el desarrollo en nuestra comunidad de San Rafael Pie de la cuesta, San Marcos, apoyando con fuentes de empleo para campesinos y caficultores de la región. 
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Carlos Alvarado" job="Barista" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Herbert Juerez" job="CEO - Barista" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
