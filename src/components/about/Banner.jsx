import React, { useRef, useEffect } from 'react'
import header2 from '../../assets/about/header 2.jpg'

import { Carousel } from 'bootstrap'

export const Banner = () => {

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
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" ref={carouselRef} >
      <div className="carousel-inner"> 
        <div className="carousel-item active">
          <img src={header2} className="d-block w-100" alt="banner biocoffe"/>
        </div>
        <div className="carousel-item ">
          <img src={header2} className="d-block w-100" alt="banner biocoffe"/>
        </div>
      </div>
    </div>
  ) 
}
