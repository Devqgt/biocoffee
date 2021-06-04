import React from 'react'

export const Title = ({title, subtitle}) => {
  return (
    <div className="row mt-5 mb-3">
      <div className="col-md-12 text-center">
        <p className="display-5 text-uppercase fw-bold">
          {title}
        </p>
        <p className="lead text-uppercase fw-light">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
