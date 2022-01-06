export type Cups = Record<any, any>
export type Quotes = Record<any, any>
export type Backgrounds = Record<any, any>

export type Pet = {
  id: string,
  imageUrl: string,
  name: Record<string, string>[],
  variantId: string,
  tags?: string[]
}

export type Dogs = {
  success: boolean,
  title: string,
  pets: Pet[]
}

export type Cats = {
  success: boolean,
  title: string,
  pets: Pet[]
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

export type Hairstyles = Record<HairstyleStyle, Hairstyle[]>[]

export type Men = {
  success: boolean,
  title: string,
  hairstyles: Record<HairstyleColors, Hairstyles>[],
  bodies: Body[]
}

export type Women = {
  success: boolean,
  title: string,
  hairstyles: Record<HairstyleColors, Hairstyles>[],
  bodies: Body[]
}

export type Product = {
  success: boolean,
  title: string,
  items: [Cups[], Quotes[], Backgrounds[]],
  price: string,
  sampleImageURL: string,
  numberOfGrades: string,
}

export type State = {
  cups: Cups,
  dogs: Dogs,
  cats: Cats,
  men: Men,
  women: Women,
  product: Product,
}

export default () => (<State>{})
