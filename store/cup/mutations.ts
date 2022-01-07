import { rand } from '@vueuse/core'
import { Cats, Dogs, Men, Product, EditorState, Women, Pet } from '~/store/cup/state'

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  setDogs (state: EditorState, dogs: Dogs) {
    state.dogs = dogs
  },

  setCats (state: EditorState, cats: Cats) {
    state.cats = cats
  },

  setMen (state: EditorState, men: Men) {
    state.men = men
  },

  setWomen (state: EditorState, women: Women) {
    state.women = women
  },

  setProduct (state: EditorState, product: Product) {
    state.product = product

    state.count = 0
    state.total = 0
    state.title = product.title
    state.price = product.price
    state.workingObject.backgroundId = product.items.backgrounds?.[0]?.backgroundId
    state.workingObject.cupId = product.items.cups?.[0]?.id
    state.workingObject.quoteId = ''
    state.workingObject.items = []
  },

  setCup (state: EditorState, cupId: string) {
    state.workingObject.cupId = cupId
    // dispatch('preview/getProductPreview')
  },

  setBackground (state: EditorState, backgroundId: string) {
    state.workingObject.backgroundId = backgroundId
    // dispatch('preview/getProductPreview')
  },

  setQuote (state: EditorState, quoteId: string) {
    state.workingObject.quoteId = quoteId
    // dispatch('preview/getProductPreview')
  },

  setTotal (state: EditorState, total: number) {
    state.total = total
  },

  recalculateTotal (state: EditorState) {
    state.total = state.price * state.count
  },

  increaseQuantity (state: EditorState) {
    state.count++
    this.recalculateTotal(state)
  },

  decreaseQuantity (state: EditorState) {
    state.count--
    this.recalculateTotal(state)
  },

  resetWorkingObject (state: EditorState) {
    state.workingObject = {
      cupId: '',
      backgroundId: '',
      quoteId: '',
      items: []
    }
  },

  prepareRandomProduct (state: EditorState) {
    const count = randomIntFromInterval(2, 4)
    let randBody: number
    let randHair: number
    let typeRand: number
    let randPet: number
    let randVariant: number
    let pet: Pet[]
    let petsArray: any[]

    const randCup: number = randomIntFromInterval(0, state.product.items.cups.length - 1)
    state.workingObject.cupId = state.product.items.cups[randCup].id

    for (let i = 0; i < count; i++) {
      typeRand = randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          if (state.men) {
            randBody = randomIntFromInterval(0, state.men.bodies.length - 1)
            randHair = randomIntFromInterval(0, state.men.hairstyles.black.all.length - 1)
            state.workingObject.items.push({
              type: 'man',
              bodyId: state.men.bodies[randBody].bodyId,
              bodyImageUrl: state.men.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: state.men.hairstyles.black.all[randHair].hairstyleId
            })
          }
          break

        case 2:
          if (state.women) {
            randBody = randomIntFromInterval(0, state.women.bodies.length - 1)
            randHair = randomIntFromInterval(0, state.women.hairstyles.black.bun.length - 1)
            state.workingObject.items.push({
              type: 'woman',
              bodyId: state.women.bodies[randBody].bodyId,
              bodyImageUrl: state.women.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: state.women.hairstyles.black.bun[randHair].hairstyleId
            })
          }
          break

        case 3:
          if (state.dogs?.pets) {
            petsArray = Object.entries(state.dogs.pets)
            randPet = randomIntFromInterval(0, petsArray.length - 1)
            pet = petsArray[randPet][1]
            randVariant = randomIntFromInterval(0, pet.length - 1)
            state.workingObject.items.push({
              type: 'dog',
              id: pet[0].id,
              variantId: pet[randVariant].variantId
            })
          }
          break

        case 4:
          if (state.cats?.pets) {
            petsArray = Object.entries(state.dogs.pets || [])
            randPet = randomIntFromInterval(0, petsArray.length - 1)
            pet = petsArray[randPet][1]
            randVariant = randomIntFromInterval(0, pet.length - 1)
            state.workingObject.items.push({
              type: 'cat',
              id: pet[0].id,
              variantId: pet[randVariant].variantId
            })
          }
          break
      }
    }
  }
}
