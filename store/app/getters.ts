import { AppState } from '~/store/app/state'

export default {
  isMobile: (state: AppState) => state.isMobile,
  isEasyPackLoaded: (state: AppState) => state.isEasyPackLoaded
}
