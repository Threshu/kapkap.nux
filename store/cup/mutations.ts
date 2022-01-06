import { Cats, Cups, Dogs, Men, Product, State, Women } from '~/store/cup/state'

export default {
  setCups (state: State, cups: Cups) {
    state.cups = cups
  },

  setDogs (state: State, dogs: Dogs) {
    state.dogs = dogs
  },

  setCats (state: State, cats: Cats) {
    state.cats = cats
  },

  setMen (state: State, men: Men) {
    state.men = men
  },

  setWomen (state: State, women: Women) {
    state.women = women
  },

  setProduct (state: State, product: Product) {
    state.product = product

    state.productId = product.id
    state.title = product.title
    state.price = product.price
    state.backgroundId = product.items?.[0]?.backgroundId
    state.cupId = state.cups?.[0]?.id
    state.quoteId = ''
    state.count = 0
    state.total = 0
    state.items = []
  },

  setCup ({ state: any, dispatch: any }, cupId: string) {
    state.cupId = cupId
    dispatch('preview/getProductPreview')
  },

  setBackground ({ state: any, dispatch: any }, backgroundId: string) {
    state.backgroundId = backgroundId
    dispatch('preview/getProductPreview')
  },

  setQuote ({ state: any, dispatch: any }, quoteId: string) {
    state.quoteId = quoteId
    dispatch('preview/getProductPreview')
  }
}
