import React from 'react'
import dummyImage from '../../assets/poster.jpg';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './CartItem.scss'

function CartItem() {
  return (
    <div className='cartItem'>
        <div className="img-info">
            <img src={dummyImage} alt="" />
        </div>
        <div className="item-info-wrapper">
            <div className="item-info">
                <h4 className="title">Product Info</h4>
                <div className="price">₹ 435</div>
                <div className="quantity-selector">
                    <span className="btn decrement">-</span>
                    <span className="quantity">3</span>
                    <span className="btn increment">+</span>
                </div>
                <div className="total-price">Subtotal: ₹ 4536</div>
            </div>
            <div className="item-remove">
                <div className="icon">
                    <AiOutlineCloseCircle />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem