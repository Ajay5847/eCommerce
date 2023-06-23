import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Cart.scss";
import CartItem from "../cartItem/CartItem";

function Cart({ onClose }) {
  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <div className="icon">
                <AiOutlineCloseCircle/>
            </div>
            <p>close</p>
          </div>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="checkout-info">
            <div className="total-amount">
                <div className="total-message">Total</div>
                <div className="total-value">₹ 4678</div>
            </div>
            <div className="checkout primary-btn">
                Checkout Now
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
