import React from 'react'
import './Home.scss'

import { Title } from './Title'
import { Product } from './Card'
import { Profile } from './Card'
import pictureProduct from '../../assets/product/bolsa_cafe.png'
import pictureProfile from '../../assets/about/person1.png'

export const Home = () => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const products = [
    {
      'name': 'Bourbon catuai',
      'weight': '350g',
      'price': formatter.format(60).replace('$', 'Q'),
      'picture': pictureProduct,
    },
    {
      'name': 'Bourbon catuai',
      'weight': '350g',
      'price': formatter.format(60).replace('$', 'Q'),
      'picture': pictureProduct,
    },
    {
      'name': 'Bourbon catuai',
      'weight': '350g',
      'price': formatter.format(60).replace('$', 'Q'),
      'picture': pictureProduct,
    },
    
  ]
  
  const profiles = [
    {
      'name': 'Carlos Alvarado / Barista',
      'picture': pictureProfile,
    },
    {
      'name': 'Carlos Alvarado / Barista',
      'picture': pictureProfile,
    },
    {
      'name': 'Carlos Alvarado / Barista',
      'picture': pictureProfile,
    },
    
  ]

  return(
    <>
    <div className="container banner-home">
      <div className="row h-100 align-content-center">
        <div className="col-md-6">
          <div className="row h-100 align-items-center">
            <h1 className="display-1 text-uppercase fw-bold">
              Bio<br/>cofee
            </h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row h-100 align-items-center">  
            <p className="lead text-uppercase fw-light">
              El cafe huele a cielo<br/> recien molido.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="products-container">
      <div className="container py-5">
        <Title title="Recien tostado" subtitle="Recien tostado directo a tus manos."/>
        <Product products={products}/>
        <div className="row my-5">
          <div className="col-md-12 text-center">
            <a href="#!" className="link-dark lead">Ver todo</a>
          </div>
        </div>
      </div>
    </div>
    <div className="team-container">
      <div className="container py-5">
        <Title title="NUESTRO EQUIPO" subtitle="CONOCE A NUESTRO EQUIPO QUE HACE POSIBLE LA FELICIDAD EN UNA TAZA" />
        <Profile profiles={profiles} />
      </div>
    </div>
    </>
  )
}
