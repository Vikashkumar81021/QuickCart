// import React from 'react'
// import "./Breadcrum.css"
// import arrow_icon from "../assets/breadcrum_arrow.png"
// const Breakcrum = (props) => {
//     const {products}=props
//   return (
//     <div className='breakcrum'>
//       HOME  <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{products.Category} <img src={arrow_icon} alt="" />
//       {products.name}
//     </div>
//   )
// }

// export default Breakcrum

import React from 'react';
import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breakcrum = (props) => {
    const { products } = props;
    return (
        <div className='breakcrum'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
            {products && products.Category ? products.Category : 'CATEGORY'} <img src={arrow_icon} alt="" />
            {products && products.name ? products.name : 'PRODUCT'}
        </div>
    );
}

export default Breakcrum;
