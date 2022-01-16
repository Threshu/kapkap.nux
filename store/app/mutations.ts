import { Vue } from 'nuxt-property-decorator'
import { AppState } from '~/store/app/state'

export default {
  setIsMobile (state: AppState, value: boolean) : void {
    Vue.set(state, 'isMobile', value)
  }
}
