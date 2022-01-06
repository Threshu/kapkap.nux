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

export type Cup = {
  id: string,
  backgroundId: string,
  quoteId: string,
  cupId: string,
  items: CupImageItem[]
}

export default () => (<Cup>{})
