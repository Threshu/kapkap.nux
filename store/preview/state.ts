export enum Side {
  Front = 'front',
  Back = 'back'
}

export type PreviewState = {
  previewId: string
  frontImageUrl: string,
  backImageUrl: string,
  activePreviewImageUrl: string,
  currentSide: Side
}

export default () => (<PreviewState>{
  currentSide: Side.Front
})
