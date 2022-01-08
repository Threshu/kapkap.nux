import { PreviewState } from '~/store/preview/state'

export default {
  previewId: (state: PreviewState) => state.previewId,
  frontImage: (state: PreviewState) => state.frontImageUrl,
  backImage: (state: PreviewState) => state.backImageUrl,
  currentSide: (state: PreviewState) => state.currentSide,
  activePreview: (state: PreviewState) => state.activePreviewImageUrl
}
