import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import RatingStars from "@/components/RatingStars";
import { ChevronDown } from 'lucide-react';

interface ProductsListingProp {
  products: Product[];
}

const ProductListing:React.FC<ProductsListingProp> = ({products}) => {
  return (
    <div className="w-full mt-12 mb-20 px-4 flex flex-wrap gap-x-8 gap-y-16 justify-between">
      {
        products.map((product) => (
          <div
            className="relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product.id}
          >
            <div className="relative w-full h-80 overflow-hidden rounded-md group">
              <Link
                href={"/test"}
              >
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-500 ease-in-out group-hover:blur-sm"
                />
              </Link>

              <Link 
                className="absolute inset-0 flex items-center justify-center bg-teal-800 bg-opacity-70 text-white text-sm px-4 opacity-0 group-hover:opacity-100 transition duration-500"
                href={"/test"}
              >
                <p className="text-center">{product.description}</p>
              </Link>
            </div>
            <Link
              href={"/test"}
              className="font-medium text-black hover:text-amber-500 transition-colors duration-200"
            >
              {product.name}
            </Link>
            
            <div className="flex gap-x-3 items-center">
              <span className="flex gap-x-1 items-center">
                <RatingStars rating={product.rating}/>
                <ChevronDown/>
              </span>
              
              <span className="text-sm text-blue-500">101</span>
            </div>

            <Link
              href={"/test"}
              className="mt-4"
            >
              <div className="flex items-start space-x-1">
                <span className="text-sm leading-0">$</span>
                <span className="text-2xl font-semibold leading-0">{product.price}</span>
              </div>
            </Link>            

          </div>
        ))
      }      
    </div>
  )
}

export default ProductListing
