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
            <h1 className="font60">BIO <br/> COFFEE</h1>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-info title">
            <p className="weight50 font12">
              LOVE IS LOVE <br/> COFFEE IS COFFEE
            </p>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
