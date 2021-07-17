import { STATUS_LOADED } from '~/store/defaults/types'

export default {
  headerMessages: state => state.headerMessages,

  isLoaded: state => state.status === STATUS_LOADED
}
