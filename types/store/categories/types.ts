export type Category = {
  id: string
  productId: string
  path: string
  position: number
  title: string
  description: string
}

export type CategoriesState = {
  categories: Category[]
  success: boolean
}
