import HeroSlider from "@/components/HeroSlider"
import ProductCollectionCarousel from "@/components/products/ProductCollectionCarousel"
import CategoryCarousel from "@/components/products/CategoryCarousel"

export default function HomePage() {
  return (
    <div
      className="flex flex-col gap-y-10 md:gap-y-20"
    >
      <HeroSlider />

      <ProductCollectionCarousel/>

      <CategoryCarousel/>
    </div>
    
    
  )

}