import ProductDetails from "@/components/ProductDetails"
import { IProduct, getProductsData } from "@/components/SanityProducts"
// import { Products } from "@/utils/mock"

const getProductDetails = async (id:string) => {
    const res = await getProductsData()
    const filteredRes = res.filter((product: IProduct) => product._id == id)
    
    return filteredRes
}

// const getProductDetails =  (id:string) => {
//     return Products.filter((product) => product.id == id)
// }

export default async function Page({ params }: { params: { id: string } }){
    const getProduct:IProduct[] = await getProductDetails(params.id)
   
    return (
        <div className="max-w-screen-xl m-auto px-4">
            
            {
                getProduct.map((item) => (
                    <ProductDetails key={item._id} _id={item._id} title={item.title} slug={item.slug} image={item.image} category={item.category} size={item.size} price={item.price} description={item.description} />
                ))
            }
        </div>
    )
}