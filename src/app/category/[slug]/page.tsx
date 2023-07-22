import Product from "@/components/Product"
import { Products } from "@/utils/mock"
import Link from "next/link"

const getProductsByCategory = (category: string) => {
    return Products.filter(product => product.category === category)
}

export default function Page ({ params }:{ params: { slug:string }}){
    const result = getProductsByCategory(params.slug)
    return (
        <div className="products flex flex-col lg:flex-row py-[3rem] gap-4 md:gap-[2rem] max-w-screen-xl m-auto px-4">
        {
            result.length > 0 ?
            (
            result.map((product) => (
                <Product key={product.id} id={product.id} img={product.image} title={product.title} price={product.price} category={product.category}/>
            ))
            ) : (
                <div className="no_result text-center w-full h-[200px]">
                    <p className="mb-4 mt-4 text-center">No Products Found</p>
                    <Link href='/' className="bg-black text-white w-[200px] m-auto p-4 rounded block text-center">Back to Home</Link>
                </div>
            
            )
        }
        </div>
        )
}