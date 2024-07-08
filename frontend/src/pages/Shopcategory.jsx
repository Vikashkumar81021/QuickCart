import React, { useContext } from "react";
import "./CSS/category.css";
import { shopContext } from "../context/Shopcontext";
import dropdown_icon from "../components/assets/dropdown_icon.png";

import Items from "../components/items/Items";
const Shopcategory = (props) => {
  const { all_product } = useContext(shopContext);
  return (
    <div className="shop-category">
      <img className="shopcategry-banner" src={props.banner} alt="" />
      <div className="category-sort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, i) => {
          if (props. Category === item. Category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="category-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default Shopcategory;
