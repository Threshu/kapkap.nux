export type Cups = Record<any, any>

export type Pet = {
  id: string,
  imageUrl: string,
  name: Record<string, string>[],
  variantId: string
}

export type Dogs = {
  success: boolean,
  pets: Pet[]
}

export type Cats = {
  success: boolean,
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
  hairstyles: Record<HairstyleColors, Hairstyles>[],
  bodies: Body[]
}

export type Women = {
  success: boolean,
  hairstyles: Record<HairstyleColors, Hairstyles>[],
  bodies: Body[]
}

export type State = {
  cups: Cups,
  dogs: Dogs,
  cats: Cats,
  men: Men,
  women: Women,
}

export default () => (<State>{})
