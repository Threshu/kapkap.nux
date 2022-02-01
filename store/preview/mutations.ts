import { Vue } from 'nuxt-property-decorator'
import { PreviewState, Side } from '~/store/preview/state'

export default {
  setPreviewImages: (state: PreviewState, { frontImageUrl, backImageUrl }: any) => {
    Vue.set(state, 'frontImageUrl', frontImageUrl)
    Vue.set(state, 'backImageUrl', backImageUrl)
  },

  setActivePreview: (state: PreviewState, side: Side) => {
    Vue.set(state, 'currentSide', side)
    if (side === Side.Front) {
      Vue.set(state, 'activePreviewImageUrl', state.frontImageUrl)
    } else {
      Vue.set(state, 'activePreviewImageUrl', state.backImageUrl)
    }
  },

  setPreviewId: (state: PreviewState, id: string) => {
    Vue.set(state, 'previewId', id)
  },

  setSide: (state: PreviewState, side: Side) => {
    Vue.set(state, 'currentSide', side)
  },

  setLoader: (state: PreviewState, value: boolean) => {
    Vue.set(state, 'loader', value)
  }
}
