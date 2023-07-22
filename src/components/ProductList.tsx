import p1 from 'public/p1.png'
import p2 from 'public/p2.png'
import p3 from 'public/p3.png'
import ProductItem from './Product'
import Link from 'next/link'
import { Products } from '@/utils/mock'

function ProductList() {
    const getProducts = Products.slice(0,4);
  return (
            
    <div className='products_list pb-[5rem]'>
        <div className="pl_header text-center mb-[2rem]">
            <p className="leading-7 text-[12px] text-[#0062f5] font-[700] mb-[1rem]">
            PRODUCTS
            </p>
            <h2 className="scroll-m-20 text-[32px] font-[600] lg:text-[32px] leading-[1.1] tracking-wide">
            Check What We Have
            </h2>
        </div>
        <div className="products flex flex-col md:flex-row justify-between py-[3rem] gap-4">
            {
                getProducts.map((product) => (
                    <ProductItem key={product.id} id={product.id} img={product.image} title={product.title} price={product.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default ProductList