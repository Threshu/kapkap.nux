export type Category = {
  id: string
  path: string
  position: number
  title: string
  description: string
}

export type Product = {
  avgGrade: number
  backgroundId: string
  numberOfGrades: number
  price: number
  productId: string
  sampleImageURL: string
  title: string
}

export type CategoriesState = {
  products: Product[]
  categories: Category[]
  success: boolean
  lastVisited: Record<string, Product>
}
