<template>
  <div>
    <h3 class="productConfBoxTitle">
      Dodaj postać lub zwierzę
    </h3>
    <div class="objectsList">
      <template
        v-for="(item, index) in items"
      >
        <div
          v-if="item.type != 'quote' && item.type != 'background'"
          :key="index"
          class="objectItem"
        >
          <div class="objectRow">
            <div v-if="item" class="objImage">
              <img :src="getObjectImage(item)">
              <img
                v-if="item.type === 'woman' || item.type === 'man' "
                :src="getHairstyleImage(item)"
              >
            </div>
            <div v-if="item && item.name" class="objName">
              {{ item.name }}
            </div>

            <div class="objActions">
              <button class="edit" @click="editItem(index)" />
              <button class="remove" @click="setItemIdToRemove(index)" />
              <button class="top" @click="moveItemUp(index)" />
              <button class="down" @click="moveItemDown(index)" />
            </div>
          </div>
          <div v-if="removeItemIndex === index" class="removeBox">
            <button class="cancelRemove" @click="cancelRemove">
              Anuluj
            </button>
            <button class="acceptRemove" @click="removeItem(index, true)">
              Usuń
            </button>
          </div>
        </div>
      </template>

      <button class="addNew" @click="showModal = true">
        Dodaj
      </button>

      <div v-if="showEditModal" class="modal">
        <button class="closeModal" @click="showEditModal = false">
          &times;
        </button>
        <h3 class="modalTitle">
          {{ popupData.title }}
        </h3>

        <div class="modalContent edit">
          <input ref="name" v-model="tempObject.name" class="objectName" type="text" placeholder="Imię">

          <div v-if="popupData.bodies" class="objectsBox">
            <h4 class="objectTitle">
              Sylwetka
            </h4>

            <div
              v-for="(item, index) in popupData.bodies"
              :key="index"
              class="objItem"
              :class="[item.bodyId === tempObject.bodyId ? 'selected' : '']"
              @click="setFigure(item.bodyId, item.bodyImageUrl)"
            >
              <img
                alt="product body icon"
                :src="item.bodyImageUrl"
              >
            </div>
          </div>

          <div v-if="popupData.hairstyles" class="objectsBox color">
            <h4 class="objectTitle">
              Kolor włosów
            </h4>
            <div
              v-for="(item, index) in popupData.hairstyles"
              :key="index"
              class="objItem"
              :class="[index === tempObject.hairColor ? 'selected' : '']"
            >
              <div class="colorItem" :class="index" @click="setHairColor(index)" />
            </div>
          </div>

          <div v-if="popupData.hairstyles && popupData.hairstyles[tempObject.hairColor]" class="objectsBox">
            <h4 class="objectTitle">
              Rodzaj włosów
            </h4>

            <div v-for="(item, index) in popupData.hairstyles[tempObject.hairColor]" :key="index">
              <div
                v-for="(item1, index1) in item"
                :key="index1"
                class="objItem"
                :class="item1.hairstyleId === tempObject.hairstyleId ? 'selected' : ''"
                @click="setHairStyle(item1.hairstyleId)"
              >
                <img
                  alt="product hairstyle icon"
                  :src="item1.hairstyleImageUrl"
                >
              </div>
            </div>
          </div>
          <div v-if="popupData.type==='dog' || popupData.type==='cat'" class="objectsBox">
            <div
              v-for="(dogs, breed) in popupData"
              :key="breed"
            >
              <span class="breed">{{ breed }}</span>
              <div
                v-for="(item, index) in dogs"
                :key="index"
                class="objItem"
                :class="item.variantId === tempObject.variantId ? 'selected' : ''"
                @click="setPet(item.variantId, item.id, item.imageUrl)"
              >
                <img
                  v-if="item.imageUrl"
                  alt="product body icon"
                  :src="item.imageUrl"
                >
              </div>
            </div>
          </div>
        </div>

        <button class="cancel" @click="editCancel()">
          Anuluj
        </button>
        <button class="add" @click="pushObject(popupData.type, tempObject.edit)">
          Zapisz
        </button>
      </div>
      <div
        v-if="showModal"
        class="modal"
      >
        <button class="closeModal" @click="showModal = false">
          &times;
        </button>
        <h3 class="modalTitle">
          Kogo lub co chcesz dodać?
        </h3>

        <div class="modalContent">
          <div class="objItem" @click="newCupObject(women, 'woman')">
            <img src="/images/cup_page/sample_woman.png">
            <span class="name">Kobietę</span>
          </div>
          <div class="objItem" @click="newCupObject(men, 'man')">
            <img src="/images/cup_page/sample_man.png">
            <span class="name">Mężczyznę</span>
          </div>
          <div class="objItem" @click="newCupObject(dogs, 'dog')">
            <img src="/images/cup_page/sample_dog.png">
            <span class="name">Psa</span>
          </div>
          <div class="objItem" @click="newCupObject(cats, 'cat')">
            <img src="/images/cup_page/sample_cat.png">
            <span class="name">Kota</span>
          </div>
        </div>

        <button class="cancel" @click="showModal = false">
          Anuluj
        </button>
        <button class="add">
          Dodaj
        </button>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Action, Component, Getter, Mutation, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { WorkingItem, Women, Men, Cats, Dogs, Pet, Body, Hairstyle, Hairstyles } from '~/store/cup/state'

@Component
export default class ItemsChoice extends Vue {
  @Prop(Boolean) readonly editMode!: boolean
  @Getter('cup/items') items!: WorkingItem[]
  @Getter('cup/women') women!: Women
  @Getter('cup/men') men!: Men
  @Getter('cup/cats') cats!: Cats
  @Getter('cup/dogs') dogs!: Dogs

  @Mutation('cup/resetWorkingObject') resetWorkingObject!: Function

  @Action('cup/moveItemUp') moveItemUp!: Function
  @Action('cup/moveItemDown') moveItemDown!: Function
  @Action('cup/removeItem') removeItem!: Function
  @Action('cup/setItem') setItem!: Function

  showModal: boolean = false
  showEditModal: boolean = false

  removeBox: boolean = false
  removeItemIndex: number = -1

  // data to be displayed in the popup when adding or editing an object
  popupData: any = []

  // temporary object created in the popup when adding or editing
  tempObject: any = {
    type: '',
    edit: '',
    bodyId: '',
    variantId: '',
    bodyImageUrl: '',
    hairColor: 'black',
    hairstyleId: ''
  }

  @Watch('showModal')
  onChangeModal (value: boolean) {
    this.$emit('changeModal', value)
  }

  @Watch('showEditModal')
  onChangeEditModal (value: boolean) {
    this.$emit('changeEditModal', value)
  }

  resetTempObject () {
    this.tempObject = {
      type: '',
      edit: '',
      bodyId: '',
      variantId: '',
      bodyImageUrl: '',
      hairColor: 'black',
      hairstyleId: ''
    }
  }

  newCupObject (data: Object, type: String) {
    this.popupData = data
    this.showModal = false
    this.popupData.type = type
    this.showEditModal = true
  }

  pushObject (type: any, edit: any) {
    this.tempObject.type = type
    if (edit) {
      this.setItem({ index: edit, item: this.tempObject })
    } else {
      this.setItem({ index: this.items.length, item: this.tempObject })
    }
    this.resetTempObject()
    this.showEditModal = false
  }

  editCancel () {
    this.showEditModal = false
    this.resetTempObject()
    this.popupData = []
  }

  editItem (itemIndex: number) {
    this.tempObject = { ...this.items[itemIndex] }
    this.showModal = false
    this.showEditModal = true

    this.tempObject.edit = itemIndex

    switch (this.tempObject.type) {
      case 'cat':
        this.popupData = this.cats
        this.popupData.type = this.tempObject.type
        break
      case 'dog':
        this.popupData = this.dogs
        this.popupData.type = this.tempObject.type
        break
      case 'woman':
        this.popupData = this.women
        this.popupData.type = this.tempObject.type
        break
      case 'man':
        this.popupData = this.men
        this.popupData.type = this.tempObject.type
        break
    }
  }

  setHairColor (color: string) {
    this.tempObject.hairColor = color
  }

  setFigure (bodyId: string, bodyImageUrl: string) {
    this.tempObject.bodyId = bodyId
    this.tempObject.bodyImageUrl = bodyImageUrl
  }

  setPet (variantId: any, id: any, bodyImageUrl: any) {
    this.tempObject.id = id
    this.tempObject.variantId = variantId
    this.tempObject.bodyImageUrl = bodyImageUrl
  }

  setHairStyle (hairstyleId: string) {
    this.tempObject.hairstyleId = hairstyleId
  }

  setItemIdToRemove (index: number) {
    this.removeItemIndex = index
  }

  cancelRemove () {
    this.removeItemIndex = -1
  }

  getHairstyleImage (item: WorkingItem): string {
    let foundUrl: string = ''

    switch (item.type) {
      case 'man':
        Object.values(this.men.hairstyles).find((rootHairstyles: Hairstyles) => {
          Object.values(rootHairstyles).find((hairstyles: Hairstyle[]) => {
            hairstyles.find((hairstyle: Hairstyle) => {
              if (hairstyle.hairstyleId === item.hairstyleId) {
                foundUrl = hairstyle.hairstyleImageUrl
                return true
              }
              return false
            })
            return foundUrl !== ''
          })
          return foundUrl !== ''
        })
        if (foundUrl) {
          return foundUrl
        }
        break

      case 'woman':
        Object.values(this.women.hairstyles).find((rootHairstyles: Hairstyles) => {
          Object.values(rootHairstyles).find((hairstyles: Hairstyle[]) => {
            hairstyles.find((hairstyle: Hairstyle) => {
              if (hairstyle.hairstyleId === item.hairstyleId) {
                foundUrl = hairstyle.hairstyleImageUrl
                return true
              }
              return false
            })
            return foundUrl !== ''
          })
          return foundUrl !== ''
        })
        if (foundUrl) {
          return foundUrl
        }
        break
    }

    return ''
  }

  getObjectImage (item: WorkingItem): string {
    let foundUrl: Body
    let url: string = ''

    switch (item.type) {
      case 'man':
        foundUrl = this.men.bodies.find((man: Body) => man.bodyId === item.bodyId)!
        if (foundUrl) {
          return foundUrl.bodyImageUrl
        }
        break

      case 'woman':
        foundUrl = this.women.bodies.find((woman: Body) => woman.bodyId === item.bodyId)!
        if (foundUrl) {
          return foundUrl.bodyImageUrl
        }
        break

      case 'cat':
        Object.values(this.cats).find((value: Pet[]) => {
          value.find((catItem: Pet) => {
            if (item.id === catItem.id && item.variantId === catItem.variantId) {
              url = catItem.imageUrl
              return true
            }
            return false
          })
          return url !== ''
        })
        if (url) {
          return url
        }
        break

      case 'dog':
        Object.values(this.cats).find((value: Pet[]) => {
          value.find((dogItem: Pet) => {
            if (item.id === dogItem.id && item.variantId === dogItem.variantId) {
              url = dogItem.imageUrl
              return true
            }
            return false
          })
          return url !== ''
        })
        if (url) {
          return url
        }
        break
    }

    return ''
  }
}
</script>
