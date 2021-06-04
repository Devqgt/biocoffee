import React from 'react'

export const Title = ({legend, title}) => {
  return ( 
    <div className="row h-100 align-content-center justify-content-center">
      <div className="col-md-12">
        <div className="d-flex"> 
          <div className="mx-lg-auto">  
            <p className="h2 text-uppercase fw-light m-0">
              {legend}
            </p>
            <h1 className="lh-1 display-1 text-uppercase fw-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
