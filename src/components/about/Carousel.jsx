
import React, { useRef, useEffect } from 'react'
//import header2 from '../../assets/about/header 2.jpg'

import { Carousel } from 'bootstrap'

export const CarouselG = ({images}) => {

  const carouselRef = useRef()

  useEffect(() => {
    //console.log(carouselRef.current)
    let carousel = new Carousel(carouselRef.current, {
      interval: 5000,
      wrap: true
    })
    //console.log(carousel)
  },[])

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" ref={carouselRef} >
      <div className="carousel-indicators">
        {images.map((el, index) => (
          <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${index}`} className={index === 0 ? 'active' : '' }  aria-current="true" ></button>
        ))}
      </div>
      <div className="carousel-inner"> 
        {images.map((el, index) => (
          <div className={`carousel-item ${index === 0 && 'active'}`} key={index}>
            <img src={el} className="d-block w-100" alt=""/>
          </div>
        ))}
      </div>
    </div>
  ) 
}
