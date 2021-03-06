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

export type Dogs = Record<string, Pet[]>

export type Cats = Record<string, Pet[]>

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
  productId: string,
  success: boolean,
  title: string,
  items: {
    backgrounds: Background[],
    cups: Cup[],
    quotes: Quote[]
  },
  price: number,
  sampleImageURL: string,
  numberOfGrades: string,
  backgroundId: string
}

/**
 * Real state data
 */
export type HumanImageData = {
  bodyId?: string,
  hairstyleId?: string,
  name?: string,
  hairColor?: string,
  bodyImageUrl?: string
}

export type AnimalImageData = {
  id?: string,
  variantId?: string,
  name?: string
}

export type IdOnlyImageData = {
  id?: string
}

export type CupImageData = HumanImageData & AnimalImageData & IdOnlyImageData

export type CupImageItem = {
  type: string,
  data: CupImageData
}

export type WorkingItem = {
  type: string,
  bodyId?: string,
  bodyImageUrl?: string,
  hairColor?: string,
  hairstyleId?: string,
  id?: string,
  variantId?: string,
  name?: string,
}

export type WorkingObject = {
  backgroundId: string
  quoteId: string,
  cupId: string,
  items: WorkingItem[]
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
}

export enum Tabs {
  items = 1,
  bgs = 2,
  cups = 3,
  quotes = 4,
}

export default () => (<EditorState>{})
