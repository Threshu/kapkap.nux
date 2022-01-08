import { PreviewState, Side } from '~/store/preview/state'

export default {
  setPreviewImages: (state: PreviewState, frontImage: string, backImage: string) => {
    state.frontImageUrl = frontImage
    state.backImageUrl = backImage
  },

  setActivePreview: (state: PreviewState, side: Side) => {
    if (side === Side.Front) {
      state.activePreviewImageUrl = state.frontImageUrl
    } else {
      state.activePreviewImageUrl = state.backImageUrl
    }
  },

  setPreviewId: (state: PreviewState, id: string) => {
    state.previewId = id
  }
}
