import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

function Product(props:{img:StaticImageData, title:string,price:number, category?:string, id:string}) {
  return (
    <Link href={`/products/${props.id}`} className=''>
        <div className='product_item flex flex-col items-stretch'>
            <Image src={props.img} alt='product_image' className='h-full md:h-[400px] w-full md:w-[380px] object-cover'/>
            <div className="card_detail bg-gray-100 px-4 pb-4 rounded">
                <div className="card_title flex justify-between mt-3 items-center">
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                        {props.title}
                    </h3>
                    <h3 className="scroll-m-20 text-xs font-[400] italic uppercase tracking-wide">
                    {props.category}
                    </h3>
                </div>
                <div className="card_price mt-2 flex items-center justify-between">
                    <h3 className="scroll-m-20 text-lg font-semibold tracking-tight ">
                    ${props.price}.00
                    </h3>
                    <div className="addToCart bg-black text-white text-[30px] font-bold w-[40px] h-[40px] rounded-full leading-[40px] text-center">+</div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Product