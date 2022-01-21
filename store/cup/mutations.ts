import { Vue } from 'nuxt-property-decorator'
import { Cats, Dogs, Men, Product, EditorState, Women, Pet } from '~/store/cup/state'

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
    state.women = women
  },

  setProduct (state: EditorState, product: Product) {
    Vue.set(state, 'product', product)
    Vue.set(state, 'count', 1)
    Vue.set(state, 'total', product.price)
    Vue.set(state, 'title', product.title)
    Vue.set(state, 'price', product.price)
  },

  setCup (state: EditorState, cupId: string) {
    Vue.set(state.workingObject, 'cupId', cupId)
  },

  setBackground (state: EditorState, backgroundId: string) {
    state.workingObject.backgroundId = backgroundId
  },

  setItem (state: EditorState, payload: any) {
    Vue.set(state.workingObject.items, payload.index, { ...payload.item })
  },

  setQuote (state: EditorState, quoteId: string) {
    Vue.set(state.workingObject, 'quoteId', quoteId)
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

  editWorkingObject (state: EditorState, payload: any) {
    let backgroundId = payload.items.find((backgroundId: any) => backgroundId.type === "background"); 
    let quoteId = payload.items.find((quoteId: any) => quoteId.type === "quote"); 

    Vue.set(state, 'workingObject', {
      cupId: payload.cupId,
      backgroundId: backgroundId?.data.id,
      quoteId: quoteId?.data.id,
      items: payload.items
    })
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
    let maxHumans = Math.ceil(count / 2)
    let i = 0

    // safeCounter is used to avoid an infinite loop and a page crash
    let safeCounter = 100

    state.workingObject.cupId = state.product.items.cups[0].id
    state.workingObject.backgroundId = state.product.backgroundId

    while (i < count && safeCounter > 0) {
      typeRand = randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          if (state.men && maxHumans > 0) {
            randBody = randomIntFromInterval(0, state.men.bodies.length - 1)
            randHair = randomIntFromInterval(0, state.men.hairstyles.black.all.length - 1)
            state.workingObject.items.push({
              type: 'man',
              bodyId: state.men.bodies[randBody].bodyId,
              bodyImageUrl: state.men.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: state.men.hairstyles.black.all[randHair].hairstyleId
            })
            i++
            maxHumans--
          }
          break

        case 2:
          if (state.women && maxHumans > 0) {
            randBody = randomIntFromInterval(0, state.women.bodies.length - 1)
            randHair = randomIntFromInterval(0, state.women.hairstyles.black.bun.length - 1)
            state.workingObject.items.push({
              type: 'woman',
              bodyId: state.women.bodies[randBody].bodyId,
              bodyImageUrl: state.women.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: state.women.hairstyles.black.bun[randHair].hairstyleId
            })
            i++
            maxHumans--
          }
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
              variantId: pet[randVariant].variantId,
              bodyImageUrl: pet[randVariant].imageUrl
            })
            i++
          }
          break

        case 4:
          if (state.cats) {
            petsArray = Object.entries(state.dogs || [])
            randPet = randomIntFromInterval(0, petsArray.length - 1)
            pet = petsArray[randPet][1]
            randVariant = randomIntFromInterval(0, pet.length - 1)
            state.workingObject.items.push({
              type: 'cat',
              id: pet[0].id,
              variantId: pet[randVariant].variantId,
              bodyImageUrl: pet[randVariant].imageUrl,
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
