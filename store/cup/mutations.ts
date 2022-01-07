import { Cats, CupImageItem, Cups, Dogs, Men, Pet, Product, State, Women } from '~/store/cup/state'
import { Getter, Mutation } from 'nuxt-property-decorator'

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

@Getter('cup/men') men!: Men
@Getter('cup/women') women!: Women
@Getter('cup/cats') cats!: Cats
@Getter('cup/dogs') dogs!: Dogs

@Mutation('cup/addItem') addItem!: Function

export default {
  setCups (state: State, cups: Cups) {
    state.cups = cups
  },

  setDogs (state: State, dogs: Dogs) {
    state.dogs = dogs
  },

  setCats (state: State, cats: Cats) {
    state.cats = cats
  },

  setMen (state: State, men: Men) {
    state.men = men
  },

  setWomen (state: State, women: Women) {
    state.women = women
  },

  setProduct (state: State, product: Product) {
    state.product = product

    state.productId = product.id
    state.title = product.title
    state.price = product.price
    state.backgroundId = product.items?.[0]?.backgroundId
    state.cupId = state.cups?.[0]?.id
    state.quoteId = ''
    state.count = 0
    state.total = 0
    state.items = []
  },

  setCup (state: State, cupId: string) {
    state.cupId = cupId
    // dispatch('preview/getProductPreview')
  },

  setBackground (state: State, backgroundId: string) {
    state.backgroundId = backgroundId
    // dispatch('preview/getProductPreview')
  },

  setQuote (state: State, quoteId: string) {
    state.quoteId = quoteId
    // dispatch('preview/getProductPreview')
  },

  addItem (state: State, item: CupImageItem) {
    state.items.push(item)
  },

  prepareRandomProduct (state: State) {
    const count = randomIntFromInterval(2, 4)
    let i = 0; let randBody; let randHair; let typeRand
    let randPet
    let randVariant
    let pet: Pet[]

    while (i < count) {
      typeRand = this.randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          if (this.men) {
            randBody = this.randomIntFromInterval(0, this.men.bodies.length - 1)
            randHair = this.randomIntFromInterval(0, this.men.hairstyles.black.all.length - 1)
            this.addItem({
              type: 'man',
              data: {
                bodyId: this.men.bodies[randBody].bodyId,
                bodyImageUrl: this.men.bodies[randBody].bodyImageUrl,
                hairColor: 'black',
                hairstyleId: this.men.hairstyles.black.all[randHair].hairstyleId
              }
            })
          }
          break

        case 2:
          if (this.women) {
            randBody = this.randomIntFromInterval(0, this.women.bodies.length - 1)
            randHair = this.randomIntFromInterval(0, this.women.hairstyles.black.bun.length - 1)
            this.addItem({
              type: 'woman',
              bodyId: this.women.bodies[randBody].bodyId,
              bodyImageUrl: this.women.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: this.women.hairstyles.black.bun[randHair].hairstyleId
            })
          }
          break

        case 3:
          randPet = this.randomIntFromInterval(0, Object.values(this.dogs.pets).length - 1)
          pet = this.dogs.pets[randPet]
          randVariant = this.randomIntFromInterval(0, pet.length - 1)
          this.addItem({
            type: 'dog',
            id: pet[0].id,
            variantId: pet[randVariant].variantId
          })
          break

        case 4:
          randPet = this.randomIntFromInterval(0, Object.values(this.cats.pets).length - 1)
          pet = this.dogs.pets[randPet]
          randVariant = this.randomIntFromInterval(0, pet.length - 1)
          this.addItem({
            type: 'cat',
            id: pet[0].id,
            variantId: pet[randVariant].variantId
          })
          break
      }

      i++
    }
  }
}
