import { State, CupImageItem } from './state'

export type ProductObject = {
  id: string,
  cupId: string,
  items: CupImageItem[]
}

export default {
  productObject: (state: State): ProductObject => {
    const items: CupImageItem[] = []
    items.push({
      type: 'background',
      data: {
        id: state.backgroundId
      }
    })

    if (state.quoteId) {
      items.push({
        type: 'quote',
        data: {
          id: state.quoteId
        }
      })
    }
    state.items.forEach((item: CupImageItem) => {
      items.push(item)
    })

    return {
      id: state.productId,
      cupId: state.cupId,
      items
    }
  },

  cups: (state: State) => state.product.items.cups,
  backgrounds: (state: State) => state.product.items.backgrounds,
  quotes: (state: State) => state.product.items.quotes,
  dogs: (state: State) => state.dogs,
  cats: (state: State) => state.cats,
  men: (state: State) => state.men,
  women: (state: State) => state.women,
  product: (state: State) => state.product
}
