import React, { useContext } from "react";
import { shopContext } from "../context/Shopcontext";
import {useParams} from "react-router-dom"
const Product = () => {
  const { all_product } = useContext(shopContext);
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id===Number(productId) )
  return (
    <div>
      
    </div>
  )
}

export default Product
