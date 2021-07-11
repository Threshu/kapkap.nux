import { Basket } from '@/store/basket/state'

type Defaults = {
  status: string,
  defaultPetImageUrl: string,
  headerMessages: string[],
  basket: Basket
}

export default () => (<Defaults>{
  status: 'pending',
  defaultPetImageUrl: '',
  headerMessages: [],
  basket: <Basket>{}
})
