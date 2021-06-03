import React from "react";
import "./footer.scss";

import Logo from '../../assets/footer/logo.svg';

const partnerBox = () => (
  <div className="footer d-flex">
    <div className="wrapper container">
      <div className="row h-100 align-items-center">
        <div className="col-6 d-flex align-items-center">
          <img src={Logo} alt="logo" />
          <p>www.biocoffee.com.gt</p> 
        </div>
        <div className="col-6 d-flex">
          <p className="ms-auto">Panajel Zona 7, Calle Monterrey</p>
        </div>
      </div>
    </div>
  </div>
);
export default partnerBox;
