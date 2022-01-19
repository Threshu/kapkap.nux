import { CupImageItem } from '~/store/cup/state'
import { ProductObject } from '~/store/cup/getters'

export type Product = {
  cartItemId: string,
  productId: string,
  previewId: string,
  price: number,
  number: number,
  items: CupImageItem[]
  frontThumbnail: string,
  backThumbnail: string,
  title: string,
  cupId: string
}

export type ProductAddRequest = {
  token: string,
  number: number,
  previewId: string,
  product: ProductObject
}

export type ProductUpdateRequest = {
  token: string,
  number: number,
  previewId: string,
  product: ProductObject
  cartItemId: string
}

export type BasketContainer = {
  beforeDiscount: number,
  discountValue: number,
  totalPrice: number,
  products: Product[]
}

export type BasketState = {
  basket: BasketContainer,
  edit: any
}

export default () => (<BasketState>{})
