import { CupImageItem } from '~/store/cup/state'

export type Dog = {
  id: string,
  variantIndex: number,
  name: string
}

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
