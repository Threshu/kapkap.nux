<template>
  <div>
    <h3 class="productConfBoxTitle">
      Dodaj postać lub zwierzę
    </h3>
    <div class="objectsList">
      <div v-for="(item, index) in items" :key="index" class="objectItem" v-if="item.type != 'quote' && item.type != 'background'">
        <div class="objectRow">
          <div v-if="item" class="objImage">
            <img :src="getObjectImage(item)">
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
          <input v-model="tempObject.name" class="objectName" type="text" placeholder="Imię" ref="name">

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
import { WorkingItem, Women, Men, Cats, Dogs } from '~/store/cup/state'

@Component
export default class ItemsChoice extends Vue {
  @Prop(Boolean) readonly editMode!: boolean
  @Getter('cup/items') items!: WorkingItem[]
  @Getter('cup/women') women!: Women[]
  @Getter('cup/men') men!: Men[]
  @Getter('cup/cats') cats!: Cats[]
  @Getter('cup/dogs') dogs!: Dogs[]

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

  getObjectImage (item: any) {
    let petData
    if (item.data) {
      petData = {
        'id': item.data.id,
        'variantId': item.data.variantId,
      }
    } else {
      petData = {
        'id': item.id,
        'variantId': item.variantId,
      }
    }
    let ret;
    switch (item.type) {
      case 'man':
        let manImg = this.men.bodies.find(manx => manx.bodyId === (item.bodyId || item.data.bodyId))
        if (manImg) {
          return manImg.bodyImageUrl
        }
        break

      case 'woman':
        let womanImg = this.women.bodies.find(woman => woman.bodyId === (item.bodyId || item.data.bodyId))
        if (womanImg) {
          return womanImg.bodyImageUrl
        }
        break

      case 'cat':
          for (const [key, value] of Object.entries(this.cats)) {
            value.forEach((catItem: any, index: number) => {
              if (petData.id == catItem.id) {
                ret = catItem.imageUrl;
              }
            })
            if (ret) {
              return ret
            }
          }
        break

      case 'dog':
        for (const [key1, value1] of Object.entries(this.dogs)) {
          value1.forEach((dogItem: any, index: number) => {
            if (item.id == dogItem.id && petData.variantId == dogItem.variantId) {
              ret = dogItem.imageUrl;
            }
          })
          if (ret) {
            return ret
          }
        }
        break

    }

  }
}
</script>
