import React from 'react'
import "./Offer.css"
import execlusive_img from "../assets/exclusive_image.png"
const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
     <h1>Exclusive</h1>
     <h1>Offers for you</h1>
     <p>ONLY ON BEST SELLER PRODUCTS</p>
     <button>Check Now</button>
      </div>
      <div className="offer-right">
    <img src={execlusive_img} alt="" />
      </div>
    </div>
  )
}

export default Offer
