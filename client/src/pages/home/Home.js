import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import './Home.scss'
import Product from "../../components/product/Product";
import Footer from "../../components/footer/Footer";
import { axiosClient } from "../../utils/axiosClient";

function Home() {

  const [categories,setCategories] = useState(null);
  const [isTopPicks,setIsTopPicks] = useState(null);

  async function fetchData(){
    const categoryResponse = await axiosClient.get('/newcategories?populate=image');
    const isTopPickResponse = await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image');

    setCategories(categoryResponse.data.data);
    setIsTopPicks(isTopPickResponse.data.data);
  }

  useEffect(() => {
    fetchData();
  },[])
  
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
          {categories?.map(category => <Category key={category.id} category={category}/>)}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">
            All New Designs, Same Old Details.
          </p>
        </div>
        <div className="category-content">
          {isTopPicks?.map(products => <Product key={products.id} products={products} />)}
        </div>
      </section>
    </div>
  );
}

export default Home;
