import React from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import './Home.scss'
import Product from "../../components/product/Product";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Category</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Posterz
          </p>
        </div>
        <div className="category-content">
          <Category />
          <Category />
          <Category />
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">
            All New Designs, Same Old Details.
          </p>
        </div>
        <div className="product-content">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}

export default Home;
