import { Basket } from '@/store/basket/state'

type Defaults = {
  status: string,
  defaultPetImageUrl: string,
  headerMessages: string[],
  basket: Basket
}

export const STATUS_PENDING = 'pending'
export const STATUS_LOADED = 'loaded'

export default () => (<Defaults>{
  status: STATUS_PENDING,
  defaultPetImageUrl: '',
  headerMessages: [],
  basket: <Basket>{}
})
