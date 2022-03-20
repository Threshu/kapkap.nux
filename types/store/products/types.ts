export type Product = {
  avgGrade: number
  backgroundId: string
  numberOfGrades: number
  price: number
  productId: string
  sampleImageURL: string
  title: string
  path: string
}

export type LastVisited = {
  product: Product
  addDate: string
}

export type ProductsState = {
  path: string
  products: Product[]
  success: boolean
  lastVisited: LastVisited[]
}
