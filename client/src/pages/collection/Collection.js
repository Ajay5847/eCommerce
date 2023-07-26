import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Collection() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState('');
  const [products,setProducts] = useState(null);

  const categories = useSelector((state) => state.categoryReducer.categories);

  async function fetchData(){
    const categoryResponse = await axiosClient.get(`/products?populate=image&filters[newcategory][key][$eq]=${params.categoryId}`);
    console.log("category",categoryResponse)
    setProducts(categoryResponse.data.data);
  }


  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchData();
    //api call
  }, [params])

  function handleEvent(e) {
    navigate(`/category/${e.target.value}`);
  }
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
              {categories?.map((item) => (
                <div className="filter-radio">
                  <input name="category" type="radio" value={item.attributes.key} id={item.id} onChange={handleEvent} checked={item.attributes.key === categoryId} />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="product-box">
            {products?.map((products) => <Product key={products.id} products={products} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
