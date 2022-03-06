export type Product = {
  avgGrade: number
  backgroundId: string
  numberOfGrades: number
  price: number
  productId: string
  sampleImageURL: string
  title: string
}

export type ProductsState = {
  path: string
  products: Product[]
  success: boolean
  lastVisited: Record<string, Product>
}
