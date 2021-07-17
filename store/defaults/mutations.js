import { STATUS_LOADED } from '~/store/defaults/types'

export default {
  setDefaults (state, defaults) {
    state.defaultPetImageUrl = defaults.defaultPetImageUrl
    state.headerMessages = defaults.headerMessages
    if (defaults.basket) {
      this.commit('basket/setBasket', defaults.basket)
    }
    state.status = STATUS_LOADED
  }
}
