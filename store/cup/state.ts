/**
 * Records fetched via ajax
 */
export type Cups = Record<any, any>
export type Quotes = Record<any, any>
export type Backgrounds = Record<any, any>

export type Pet = {
  id: string,
  imageUrl: string,
  name: Record<string, string>,
  variantId: string,
  tags?: string[]
}

export type Dogs = {
  success: boolean,
  title: string,
  pets: Record<string, Pet[]>
}

export type Cats = {
  success: boolean,
  title: string,
  pets: Record<string, Pet[]>
}

export type Body = {
  bodyId: string,
  bodyImageUrl: string
}

export type Hairstyle = {
  hairstyleId: string,
  hairstyleImageUrl: string
}

export type HairstyleColors = 'black' | 'blond' | 'brown' | 'dark_brown' | 'red' | 'other'
export type HairstyleStyle = 'all' | 'bun' | 'mid_back' | 'neck' | 'shoulder' | 'tie' | 'upper_back'

export type Hairstyles = Record<HairstyleStyle, Hairstyle[]>

export type Men = {
  success: boolean,
  title: string,
  hairstyles: Record<HairstyleColors, Hairstyles>,
  bodies: Body[]
}

export type Women = {
  success: boolean,
  title: string,
  hairstyles: Record<HairstyleColors, Hairstyles>,
  bodies: Body[]
}

export type Product = {
  id: string,
  success: boolean,
  title: string,
  items: [Cups, Quotes, Backgrounds],
  price: string,
  sampleImageURL: string,
  numberOfGrades: string,
}

/**
 * Real state data
 */
export type HumanImageData = {
  bodyId: string,
  hairstyleId: string,
  name?: string
}

export type AnimalImageData = {
  id: string,
  variantId: string,
  name?: string
}

export type IdOnlyImageData = {
  id: string
}

export type CupImageData = HumanImageData | AnimalImageData | IdOnlyImageData

export type CupImageItem = {
  type: string,
  data: CupImageData
}

export type State = {
  cups: Cups,
  dogs: Dogs,
  cats: Cats,
  men: Men,
  women: Women,
  product: Product,

  total: number
  count: number
  price: string
  title: string

  productId: string,
  backgroundId: string,
  quoteId: string,
  cupId: string,
  items: CupImageItem[]
}

export default () => (<State>{})
