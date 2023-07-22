import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import ProductCard from "./ProductCard";

export const getProductsData = async () => {
  const res = await client.fetch(`*[_type=='product']{
        _id,
        title,
        slug,
        description,
        image,
        price,
        size,
        category -> {
            name
        },
    }`);
  return res;
};

export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: IImage[]; //because image type is array
  category: {
    name: string;
  } ;
  price: number;
  size: string;
}

async function SanityProducts() {
  const data: IProduct[] = await getProductsData();
  // console.log(data)
  return (
    <div className="products_list pb-[5rem]">
      <div className="pl_header text-center mb-[2rem]">
        <p className="leading-7 text-[12px] text-[#0062f5] font-[700] mb-[1rem]">
          PRODUCTS
        </p>
        <h2 className="scroll-m-20 text-[32px] font-[600] lg:text-[32px] leading-[1.1] tracking-wide">
          Check What We Have
        </h2>
      </div>
      <div className="sanity_products flex flex-col md:flex-row gap-4 justify-between">
        {data.map((item: IProduct) => (
          <ProductCard key={item._id}  _id={item._id} title={item.title} slug={item.slug} image={item.image} category={item.category} size={item.size} price={item.price} description={item.description} />      
        ))}
      </div>
    </div>
  );
}

export default SanityProducts;
