import { Product } from "@/types/product";
import ProductListing from "@/components/products/ProductListing";

const PRODUCT_PER_PAGE = 8;
const  products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'Soft cotton t-shirt with a relaxed fit.',
    price: 29.99,
    image: '/product/watch.jpeg',
    category: 'Clothing',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    description: 'Denim jeans with a modern slim fit cut.',
    price: 59.99,
    image: '/product/watch.jpeg',
    category: 'Clothing',
    rating: 4.2,
    inStock: true,
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight and comfortable running shoes.',
    price: 89.99,
    image: '/product/watch.jpeg',
    category: 'Footwear',
    rating: 4.8,
    inStock: false,
  },
  {
    id: '4',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones.',
    price: 129.99,
    image: '/product/watch.jpeg',
    category: 'Electronics',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '5',
    name: 'Old Headphones',
    description: 'Old ear headphones.',
    price: 6.99,
    image: '/product/watch.jpeg',
    category: 'Electronics',
    rating: 2.6,
    inStock: true,
  },
]
const ListPage = () => {
  return (
    <ProductListing products={products}/>
  )
}

export default ListPage
