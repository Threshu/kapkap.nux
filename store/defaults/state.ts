import { Basket } from '@/store/basket/state'
import { STATUS_PENDING } from '~/store/defaults/types'

export type Defaults = {
  status: string,
  defaultPetImageUrl: string,
  headerMessages: string[],
  basket: Basket
}

export default () => (<Defaults>{
  status: STATUS_PENDING,
  defaultPetImageUrl: '',
  headerMessages: [],
  basket: <Basket>{}
})
