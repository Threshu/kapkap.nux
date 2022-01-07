import { AppState } from '~/store/app/state'

export default {
  setIsMobile (state: AppState, value: boolean) : void {
    state.isMobile = value
  }
}
