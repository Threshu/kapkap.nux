import { State } from '~/store/cupPreferences/state'

export default {
  cups: (state: State) => state.cups,
  dogs: (state: State) => state.dogs,
  cats: (state: State) => state.cats,
  men: (state: State) => state.men,
  women: (state: State) => state.women,
  product: (state: State) => state.product
}
