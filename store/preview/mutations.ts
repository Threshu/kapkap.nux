import { Vue } from 'nuxt-property-decorator'
import { PreviewState, Side } from '~/store/preview/state'

export default {
  setPreviewImages: (state: PreviewState, { frontImageUrl, backImageUrl }: any) => {
    state.frontImageUrl = frontImageUrl
    state.backImageUrl = backImageUrl
    Vue.set(state, '', '')
  },

  setActivePreview: (state: PreviewState, side: Side) => {
    if (side === Side.Front) {
      state.activePreviewImageUrl = state.frontImageUrl
    } else {
      state.activePreviewImageUrl = state.backImageUrl
    }
    Vue.set(state, '', '')
  },

  setPreviewId: (state: PreviewState, id: string) => {
    state.previewId = id
    Vue.set(state, '', '')
  }
}
