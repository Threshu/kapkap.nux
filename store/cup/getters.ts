import { EditorState, CupImageItem } from './state'

export type ProductObject = {
  id: string,
  cupId: string,
  items: CupImageItem[]
}

export default {
  productObject: (state: EditorState): ProductObject => {
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

  cups: (state: EditorState) => state.product.items.cups,
  backgrounds: (state: EditorState) => state.product.items.backgrounds,
  quotes: (state: EditorState) => state.product.items.quotes,
  dogs: (state: EditorState) => state.dogs,
  cats: (state: EditorState) => state.cats,
  men: (state: EditorState) => state.men,
  women: (state: EditorState) => state.women,
  product: (state: EditorState) => state.product,
  count: (state: EditorState) => state.count,
  total: (state: EditorState) => state.total,
  price: (state: EditorState) => state.price,
  title: (state: EditorState) => state.title
}
