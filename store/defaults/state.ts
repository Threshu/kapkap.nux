import { Basket } from '@/store/basket/state'

type Defaults = {
  defaultPetImageUrl: string,
  headerMessages: string[],
  basket: Basket
}

export default () => (<Defaults>{
  defaultPetImageUrl: '',
  headerMessages: [],
  basket: <Basket>{}
})
