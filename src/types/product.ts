export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  quantity: number
}

export interface ProductCategory {
  id: string
  name: string
  image: string
}
