export const SET_DEFAULTS = 'setDefaults'

export default {
  [SET_DEFAULTS] (state, defaults) {
    state.defaultPetImageUrl = defaults.defaultPetImageUrl
    state.headerMessages = defaults.headerMessages
    state.basket = defaults.basket
  }
}
