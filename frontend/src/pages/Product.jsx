import React, { useContext } from "react";
import { shopContext } from "../context/Shopcontext";
import {useParams} from "react-router-dom"
import Breakcrum from "../components/Breakcrum/Breakcrum";
import Productdisplay from "../components/ProductDisplay/Productdisplay";
const Product = () => {
  const { all_product } = useContext(shopContext);
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id===Number(productId) )
  return (
    <div>
      <Breakcrum product={product} />
      <Productdisplay  product={product}/>
    </div>
  )
}

export default Product
