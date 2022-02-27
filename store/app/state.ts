export type AppState = {
  isMobile: boolean,
  isEasyPackLoaded: boolean
}

export default () => (<AppState>{
  isEasyPackLoaded: false
})
