export enum Side {
  Front = 'front',
  Back = 'back'
}

export type Preview = {
  previewId: string
  frontImageUrl: string,
  backImageUrl: string,
  activePreviewImageUrl: string,
  currentSide: Side
}

export default () => (<Preview>{
  currentSide: Side.Front
})
