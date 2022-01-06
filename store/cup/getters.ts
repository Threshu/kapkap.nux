import { Cup, CupImageItem } from './state'

export type ProductObject = {
  id: string,
  cupId: string,
  items: CupImageItem[]
}

export default {
  productObject: (state: Cup): ProductObject => {
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
      id: state.id,
      cupId: state.cupId,
      items
    }
  }
}
