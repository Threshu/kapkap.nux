import { EditorState, CupImageItem, WorkingItem, CupImageData } from './state'

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
        id: state.workingObject.backgroundId
      }
    })

    if (state.workingObject.quoteId) {
      items.push({
        type: 'quote',
        data: {
          id: state.workingObject.quoteId
        }
      })
    }
    state.workingObject.items.forEach((item: WorkingItem) => {
      items.push({
        type: item.type,
        data: <CupImageData>{
          bodyId: item.bodyId,
          hairstyleId: item.hairstyleId,
          id: item.id,
          name: item.name,
          variantId: item.variantId,
        }
      })
    })

    return {
      id: state.product.id,
      cupId: state.workingObject.cupId,
      items
    }
  },

  cups: (state: EditorState) => state.product?.items.cups,
  backgrounds: (state: EditorState) => state.product.items?.backgrounds,
  quotes: (state: EditorState) => state.product?.items.quotes,
  dogs: (state: EditorState) => state.dogs,
  cats: (state: EditorState) => state.cats,
  men: (state: EditorState) => state.men,
  women: (state: EditorState) => state.women,
  product: (state: EditorState) => state.product,
  count: (state: EditorState) => state.count,
  total: (state: EditorState) => state.total,
  price: (state: EditorState) => state.price,
  title: (state: EditorState) => state.title,
  editMode: (state: EditorState) => state.editMode,
  cupId: (state: EditorState) => state.workingObject.cupId,
  backgroundId: (state: EditorState) => state.workingObject.backgroundId
}
