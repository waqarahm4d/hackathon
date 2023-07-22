import { StaticImageData } from "next/image"

export type Product = {
    id:string,
    title:string,
    price:number,
    category:string,
    image:StaticImageData,
};