import { BasketState } from '~/store/basket/state'

export default {
  basket: (state: BasketState) => state.basket,

  // ???
  editb: (state: BasketState) => state.edit
}
