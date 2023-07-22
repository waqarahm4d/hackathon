import { urlForImage } from "@/lib/sanityImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProduct } from "./SanityProducts";

function ProductCard(props:IProduct) {
    // console.log(props.slug)
  return (
    <div>
      <Link href={`/products/${props._id}`} className="product_item flex flex-col items-stretch max-w-xs">
        <Image
          width={300}
          height={300}
          src={urlForImage(props.image[0]).url()}
          alt="product_image"
          className="h-full md:h-[400px] w-full md:w-[380px] object-cover"
        />
        <div className="card_detail bg-gray-100 px-4 pb-4 rounded">
          <div className="card_title flex justify-between mt-3 items-center">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight ">
              {props.title}
            </h3>
            <h3 className="scroll-m-20 text-xs font-[400] italic uppercase tracking-wide">
              {props.category.name}
            </h3>
          </div>
          <div className="card_price mt-2 flex items-center justify-between">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight ">
              ${props.price.toFixed(2)}
            </h3>
            <button className="addToCart bg-black text-white text-[30px] font-bold w-[40px] h-[40px] rounded-full leading-[40px] text-center">
              +
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
