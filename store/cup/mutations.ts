import { Vue } from 'nuxt-property-decorator'
import {
  Cats,
  Dogs,
  Men,
  Product,
  EditorState,
  Women,
  Pet,
  CupImageItem,
  WorkingObject,
  WorkingItem,
  HairstyleColors,
  HairstyleStyle
} from '~/store/cup/state'
import { Product as CartProduct } from '~/store/basket/state'
import sessionStorageService from '~/services/sessionStorage'

function randomIntFromInterval (min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function moveArrayItemToNewIndex (arr: any, oldIndex: number, newIndex: number) {
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
  return arr
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
    Vue.set(state, 'women', women)
  },

  setProduct (state: EditorState, product: Product) {
    Vue.set(state, 'product', product)
    Vue.set(state, 'total', product.price)
    Vue.set(state, 'title', product.title)
    Vue.set(state, 'price', product.price)
  },

  setCup (state: EditorState, cupId: string) {
    Vue.set(state.workingObject, 'cupId', cupId)
  },

  setBackground (state: EditorState, backgroundId: string) {
    Vue.set(state.workingObject, 'backgroundId', backgroundId)
    if (state.editMode) {
      Vue.set(state.workingObject.items[0], 'id', backgroundId)
    }
  },

  setItem (state: EditorState, payload: any) {
    Vue.set(state.workingObject.items, payload.index, { ...payload.item })
  },

  setQuote (state: EditorState, quoteId: string) {
    if (state.workingObject.quoteId === quoteId && !state.editMode) {
      quoteId = ''
    }

    const index = state.workingObject.items.map(function (quote) { return quote.type }).indexOf('quote')

    Vue.set(state.workingObject, 'quoteId', quoteId)
    if (state.editMode) {
      if (index !== -1) {
        Vue.set(state.workingObject.items[index], 'id', quoteId)
      } else {
        state.workingObject.items.push({
          'id': quoteId,
          'type': 'quote'
        })
      }
    }
  },

  setTotal (state: EditorState, total: number) {
    Vue.set(state, 'total', total)
  },

  setEditMode (state: EditorState, editMode: boolean) {
    Vue.set(state, 'editMode', editMode)
  },

  recalculateTotal (state: EditorState) {
    Vue.set(state, 'total', state.price * state.count)
  },

  setQuantity (state: EditorState, quantity: number) {
    if (quantity < 1) {
      quantity = 1
    } else if (quantity > 99) {
      quantity = 99
    }
    Vue.set(state, 'count', quantity)
  },

  resetWorkingObject (state: EditorState) {
    Vue.set(state, 'workingObject', {
      cupId: '',
      backgroundId: '',
      quoteId: '',
      items: []
    })
  },

  setWorkingObjectFromCart (state: EditorState, product: CartProduct) {
    const background: CupImageItem = product.items.find((item: CupImageItem) => item.type === 'background')!
    const quote: CupImageItem = product.items.find((item: CupImageItem) => item.type === 'quote')!
    const items: WorkingItem[] = product.items.map((item: CupImageItem) => (<WorkingItem>{
      type: item.type,
      bodyId: item.data.bodyId,
      hairstyleId: item.data.hairstyleId,
      id: item.data.id,
      variantId: item.data.variantId,
      name: item.data.name
      // @todo
      // bodyImageUrl
      // hairColor
    }))

    Vue.set(state, 'workingObject', <WorkingObject>{
      backgroundId: background?.data.id,
      quoteId: quote?.data.id,
      cupId: product.cupId,
      items
    })
  },

  prepareProductForCup (state: EditorState) {
    const data = sessionStorageService.getData(`workingProduct-${state.product?.productId}`)
    if (data) {
      state.workingObject = data.workingObject
      return
    }
    const count = randomIntFromInterval(2, 4)
    let randBody: number
    let randHair: number
    let typeRand: number
    let randPet: number
    let randVariant: number
    let pet: Pet[]
    let petsArray: any[]
    let maxHumans = Math.ceil(count / 2)
    const maleHair: HairstyleColors[] = ['black', 'blond', 'brown', 'dark_brown', 'other']
    const femaleHair: HairstyleColors[] = ['black', 'blond', 'brown', 'dark_brown', 'red', 'other']
    const hairstyles: HairstyleStyle[] = ['bun', 'mid_back', 'neck', 'shoulder', 'tie', 'upper_back']
    let randHairColor: number
    let randHairstyle: number
    let i = 0

    // safeCounter is used to avoid an infinite loop and a page crash
    let safeCounter = 100

    if (state.product) {
      state.workingObject.backgroundId = state.product.backgroundId
      state.workingObject.cupId = state.product.items.cups[0].id
    }

    while (i < count && safeCounter > 0) {
      typeRand = randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          try {
            if (state.men && maxHumans > 0) {
              randBody = randomIntFromInterval(0, state.men.bodies.length - 1)
              randHairColor = randomIntFromInterval(0, maleHair.length - 1)
              randHair = randomIntFromInterval(0, state.men.hairstyles[maleHair[randHairColor]].all.length - 1)
              state.workingObject.items.push({
                type: 'man',
                bodyId: state.men.bodies[randBody].bodyId,
                hairColor: maleHair[randHairColor],
                hairstyleId: state.men.hairstyles[maleHair[randHairColor]].all[randHair].hairstyleId
              })
              i++
              maxHumans--
            }
          } catch (e) {}
          break

        case 2:
          try {
            if (state.women && maxHumans > 0) {
              randBody = randomIntFromInterval(0, state.women.bodies.length - 1)
              randHairColor = randomIntFromInterval(0, femaleHair.length - 1)
              randHairstyle = randomIntFromInterval(0, hairstyles.length - 1)
              randHair = randomIntFromInterval(
                0,
                state.women.hairstyles[femaleHair[randHairColor]][hairstyles[randHairstyle]].length - 1
              )
              state.workingObject.items.push({
                type: 'woman',
                bodyId: state.women.bodies[randBody].bodyId,
                hairColor: femaleHair[randHairColor],
                hairstyleId: state.women.hairstyles[femaleHair[randHairColor]][hairstyles[randHairstyle]][randHair].hairstyleId
              })
              i++
              maxHumans--
            }
          } catch (e) {}
          break

        case 3:
          if (state.dogs) {
            petsArray = Object.entries(state.dogs)
            randPet = randomIntFromInterval(0, petsArray.length - 1)
            pet = petsArray[randPet][1]
            randVariant = randomIntFromInterval(0, pet.length - 1)

            state.workingObject.items.push({
              type: 'dog',
              id: pet[0].id,
              variantId: pet[randVariant].variantId
            })
            i++
          }
          break

        case 4:
          if (state.cats) {
            petsArray = Object.entries(state.cats || [])
            randPet = randomIntFromInterval(0, petsArray.length - 1)
            pet = petsArray[randPet][1]
            randVariant = randomIntFromInterval(0, pet.length - 1)
            state.workingObject.items.push({
              type: 'cat',
              id: pet[0].id,
              variantId: pet[randVariant].variantId
            })
            i++
          }
          break
      }
      safeCounter--
    }
  },

  moveItemUp: (state: EditorState, index: number) => {
    moveArrayItemToNewIndex(state.workingObject.items, index, index - 1)
  },

  moveItemDown: (state: EditorState, index: number) => {
    moveArrayItemToNewIndex(state.workingObject.items, index, index + 1)
  },

  removeItem: (state: EditorState, index: number) => {
    state.workingObject.items.splice(index, 1)
  }
}
