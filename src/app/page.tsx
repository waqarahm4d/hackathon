import Events from "@/components/Events";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ProductList from "@/components/ProductList";
import SanityProducts from "@/components/SanityProducts";

export default function Home() {
  return (
   <div className="main">
    <div className="max-w-screen-xl px-4 m-auto">
      <Hero />
      <Events />
      <SanityProducts />
      <ProductList />
    </div>
    <Features />
    <div className="max-w-screen-xl px-4 m-auto">
    <Newsletter />
    </div>
   </div>
  )
}
