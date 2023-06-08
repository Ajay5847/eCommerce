import React from "react";
import "./Categories.scss";
import Product from "../../components/product/Product";

function Categories() {
  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              nam ducimus voluptatibus quis sunt adipisci tempora temporibus
              consequuntur velit explicabo.
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select className="select-sort-by" name="sort-by" id="sort-by">
                <option value="relevance">Relevance</option>
                <option value="newest-first">Newest First</option>
                <option value="price">Price - Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              <div className="filter-radio">
                <input name="category" type="radio" id="comics" />
                <label htmlFor="comics">Comics</label>
              </div>
              <div className="filter-radio">
                <input name="category" type="radio" id="tv-shows" />
                <label htmlFor="tv-shows">TV Shows</label>
              </div>
              <div className="filter-radio">
                <input name="category" type="radio" id="sports" />
                <label htmlFor="sports">Sports</label>
              </div>
            </div>
          </div>
          <div className="product-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
