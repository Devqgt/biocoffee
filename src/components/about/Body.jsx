import React from 'react'
import { Title } from './Title'
import { Banner } from './Banner'
import { CarouselG as Carousel } from './Carousel'
import history from '../../assets/about/history.jpg'
import Finca from '../../assets/about/finca.jpg'
import Header from '../../assets/about/header.jpg'

export const Body = () => {

  const images = [
    Finca,
    Header
  ]

  return (
    <>
    <Banner/>
    <div className="history-container container py-5 my-5">
      <Title legend="Nuestra" title="Historia." />
      <div className="row my-4 align-items-center justify-content-between">
        <div className="col-lg-4 col-md-6 ms-auto my-3">
          <hr className="w-50" style={{height: 2, background: '#000', opacity: 1}} /> 
          <p className="lh-base" >Finca “San Bernardino” ubicada en San Rafael pie de la cuesta san marcos Guatemala, produce cafés de diferentes altitudes que va de los 1000 msnm hasta los 2000 msnm. Herencia que ha ido pasando de generación en generación,  actualment la tercera generación de caficultores en la familia.<br/><br/> 
En 2016 iniciamos con nuevas alternativas para la producción de café orgánico. garantizando la sostenibilidad y conservación de los recursos naturales. La finca actualmente trabaja bajo criterios de certificación orgánica que prueban nuestras buenas prácticas agrícolas  esto implica un mayor esfuerzo para la producción ya que se debe modificar la forma de cultivar, además creamos las condiciones necesarias para poder crear fuentes de empleo e impulsar la economía local. 
          </p>
          <p className="text-end m-0">
            <a href="#!" className="text-decoration-none link-dark">Ver en maps</a>
          </p>
        </div>
        <div className="col-md-6 bg-img my-3" >
          <img  className="w-100" src={history} alt="Nuestra historia biocoffee" />
        </div>
      </div>
      <Title legend="Finca" title="SAN BERNANDINO"/>
      <div className="mt-4 carousel-container">
        <Carousel images={images}/>
      </div>
    </div>
    </>
  )
}
