import React from "react";
import dummyImg from "../../assets/poster.jpg";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-image center">
            <img src={dummyImg} alt="Product Img" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the Title, Wall Poster</h1>
            <h3 className="price">Rs 549</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel
              libero tenetur eligendi a dolore, suscipit delectus blanditiis
              laborum! Suscipit eos, explicabo eum placeat ipsum unde culpa
              animi esse verit
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
              <button className="add-to-cart primary-btn">Add to cart</button>
              <div className="return-policy">
                <ul>
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident, repudiandae?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa tenetur nemo impedit distinctio consequatur sed a vero
                    inventore libero temporibus.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
