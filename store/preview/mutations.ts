import { Vue } from 'nuxt-property-decorator'
import { PreviewState, Side } from '~/store/preview/state'

export default {
  setPreviewImages: (state: PreviewState, { frontImageUrl, backImageUrl }: any) => {
    state.frontImageUrl = frontImageUrl
    Vue.set(state, 'backImageUrl', backImageUrl)
  },

  setActivePreview: (state: PreviewState, side: Side) => {
    if (side === Side.Front) {
      Vue.set(state, 'activePreviewImageUrl', state.frontImageUrl)
    } else {
      Vue.set(state, 'activePreviewImageUrl', state.backImageUrl)
    }
  },

  setPreviewId: (state: PreviewState, id: string) => {
    Vue.set(state, 'previewId', id)
  }
}
