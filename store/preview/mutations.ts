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

  setLoader: (state: PreviewState, activate: boolean) => {
    Vue.set(state, 'loaderVisible', activate)
  },

  decLoadCounter: (state: PreviewState) => {
    if (state.loaderCounter > 0) {
      Vue.set(state, 'loaderCounter', state.loaderCounter - 1)
    }
  },

  incLoadCounter: (state: PreviewState) => {
    Vue.set(state, 'loaderCounter', state.loaderCounter + 1)
  },

  setLoadCounter: (state: PreviewState, value: number) => {
    Vue.set(state, 'loaderCounter', value)
  },

  incPreviewRequestNumber: (state: PreviewState) => {
    state.previewRequestNumber++
  }
}
