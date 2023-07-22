import React from 'react'
import Quantity from './Quantity'
import { urlForImage } from '@/lib/sanityImage'
import Image from 'next/image'
import { IProduct } from './SanityProducts'

function ProductDetails(props : IProduct) {
    const sizes = ['XL', 'L', 'M', 'S', 'XS']
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-[2rem] py-[4rem]">
            <div className="product_media w-[100%] flex-1">
                <Image src={urlForImage(props.image[0]).url()} alt={props.title} width={400} height={400} className="w-[100%] rounded object-fill" />
            </div>
            <div className="product_details flex-1">
                <h3 className="text-xs font-[400] italic uppercase tracking-wide mb-[2rem]">{props.category.name}</h3>
                <h2 className="text-5xl font-bold my-[2rem]">{props.title}</h2>
                <h3 className="text-2xl font-semibold my-[2rem]">${props.price}.00</h3>
                <div className="variant my-[2rem]">
                    <h3 className="font-bold">SELECT SIZE</h3>
                    <div className="flex items-center gap-4 mb-4 mt-2">
                    {
                        sizes.map((item) => {
                            return (
                                <div key={item} className="variant flex justify-center items-center w-8 h-8 bg-black cursor-pointer rounded-full border mt-2 hover:bg-white duration-300">
                                    <span className="text-[14px] font-semibold text-center text-white hover:text-black duration-300">{item}</span>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <Quantity />
                <div className="buy_box flex flex-col justify-center md:flex-row items-center gap-4 my-[2rem]">
                    <button className="font-semibold text-xl tracking-widest uppercase bg-black hover:shadow-2xl text-white border-0 rounded block w-full py-2 ">Add to Cart</button>
                    <button className="font-semibold text-xl tracking-widest uppercase bg-blue-500 text-white hover:shadow-2xl border-0 rounded block w-full py-2">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="description">
            {props.description}
        </div>
    </div>
  )
}

export default ProductDetails