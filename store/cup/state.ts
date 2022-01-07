/**
 * Records fetched via ajax
 */
export type Cup = {
  id: string,
  imageURL: string,
  name: string
}

export type Quote = {
  quoteId: string,
  quoteImageUrl: string,
  quoteTags: string[],
  quoteTitle: string
}

export type Background = {
  backgroundId: string,
  backgroundURL: string,
  backgroundTitle: string
}

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
  items: {
    backgrounds: Background[],
    cups: Cup[],
    quotes: Quote[]
  },
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

export type WorkingObject = {
  hairColor: string,
  bodyId: string,
  bodyImageUrl: string,
  petId: string,
  variantId: string,
  hairstyleId: string
}

export type EditorState = {
  dogs: Dogs,
  cats: Cats,
  men: Men,
  women: Women,
  product: Product,

  total: number,
  count: number,
  price: number,
  title: string,
  editMode: boolean,

  workingObject: WorkingObject,

  productId: string,
  backgroundId: string,
  quoteId: string,
  cupId: string,
  items: CupImageItem[]
}

export default () => (<EditorState>{})
