import React from 'react'

export const Product = ({products}) => {
  console.log(products)
  return ( 
    <div className="row">
      {products.map((el, index) => (
        <div className="col-sm-6 col-md-4 my-4" key={index}>
          <div className="card border-0 h-100 rounded-0 effect">
            <img className="card-img-top" src={el.picture} alt={el.name} />
            <div className="card-body">
              <p className="card-text">{el.name} {el.weight}</p>
              <p className="card-text">{el.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const Profile = ({profiles}) => {
  return (
    <div className="row">
      {profiles.map((el, index) => (
        <div className="col-sm-6 col-md-4 my-4" key={index}>
          <div className="card border-0 h-100 rounded-0 effect">
            <img className="card-img-top rounded-0 bg-transparent" src={el.picture} />
            <div className="card-body">
              <p className="card-text">{el.name}</p>
              <a href="#!" className="link-dark ">Ver perfil</a>
            </div>
          </div>
        </div>
      ))}
    </div> 
  )
}
