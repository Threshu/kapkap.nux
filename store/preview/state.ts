export enum Side {
  Front = 'front',
  Back = 'back'
}

export type PreviewState = {
  previewId: string
  frontImageUrl: string,
  backImageUrl: string,
  activePreviewImageUrl: string,
  currentSide: Side,
  loaderVisible: boolean,
  loaderCounter: number,
  previewRequestNumber: number
}

export default () => (<PreviewState>{
  currentSide: Side.Front,
  loaderVisible: false,
  loaderCounter: 0,
  previewRequestNumber: 0
})
