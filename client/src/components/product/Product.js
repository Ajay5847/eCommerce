import React from 'react'
import dummyImg from '../../assets/poster.jpg'
import './Product.scss'

function Product() {
  return (
    <div className='Product'>
      <div className="product-container">
        <div className="product-img">
          <div className="image" >
            <img src={dummyImg} alt="" id='img' />
          </div>
        </div>
        <div className="product-info">
          <p className="title">
            Come and become mad with Doctor Strange Multiverse of Madness
          </p>
          <p className="price">
            $567
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product