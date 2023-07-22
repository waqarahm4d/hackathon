"use client"
import React, { useState } from 'react'

function Quantity() {
    // let q:number = 1;
    const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity_box flex gap-4 items-center my-[2rem]">
        <button onClick={ () => {
            quantity > 1 ? 
            setQuantity(quantity-1) : setQuantity(quantity)
        }} className="bg-black text-white text-[35px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">-</button>
        <div id='#quantity' className="rounded bg-gray-100 p-2 w-[150px] text-center">{quantity}</div>
        <button onClick={ () => {
            setQuantity(quantity+1)
        }} className="bg-black text-white text-[25px] font-semibold w-[30px] h-[30px] hover:shadow-2xl rounded-full leading-[30px] text-center">+</button>
    </div>
  )
}

export default Quantity