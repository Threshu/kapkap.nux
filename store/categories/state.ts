export type Dog = {
  id: string,
  variantIndex: number,
  name: string
}

export type Product = {
  id: string,
  previewId: string,
  productSetName: string,
  price: number,
  number: number,
  dogIds: Dog[],
  quoteIds: string[],
  maleHairstyleIds: string[],
  femaleHairstyleIds: string[],
  maleBodyIds: string[],
  femaleBodyIds: string[],
  humanNames: string[]
  frontImageUrl: string,
  backImageUrl: string
}

export type Basket = {
  products: Product[],
  totalPrice: number
}

export default () => (<Basket>{})
