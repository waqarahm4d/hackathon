import Product from '@/components/Product'
import { Products } from '@/utils/mock'
import React from 'react'

function AllProducts() {
  return (
    <div className="products flex flex-col flex-wrap lg:flex-row py-[3rem] gap-4 md:gap-[2rem] max-w-screen-xl m-auto px-4">
        {
            Products.map((product) => (
                <Product key={product.id} id={product.id} img={product.image} title={product.title} price={product.price}/>
            ))
        }
    </div>
  )
}

export default AllProducts