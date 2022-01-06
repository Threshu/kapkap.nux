<template>
  <div>
    <h3 class="productConfBoxTitle">
      Dodaj postać lub zwierzę
    </h3>
    <div class="objectsList">
      <div v-for="(item, index) in cupObject.items" :key="index" class="objectItem">
        <div class="objectRow">
          <div class="objImage">
            <img :src="item.bodyImageUrl">
          </div>
          <div class="objName">
            {{ item.name }}
          </div>

          <div class="objActions">
            <button class="edit" @click="editItem(index)" />
            <button class="remove" @click="removeItem(index)" />
            <button class="top" @click="topItem(index)" />
            <button class="down" @click="downItem(index)" />
          </div>
        </div>
        <div v-if="removeItemId == index" class="removeBox">
          <button class="cancelRemove" @click="removeItem(null)">
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
          ✕
        </button>
        <h3 class="modalTitle">
          {{ objectData.title }}
        </h3>

        <div class="modalContent edit">
          <input v-model="tempObject.name" class="objectName" type="text" placeholder="Imię">

          <div v-if="objectData.bodies" class="objectsBox">
            <h4 class="objectTitle">
              Sylwetka
            </h4>

            <div
              v-for="(item, index) in objectData.bodies"
              :key="index"
              class="objItem"
              :class="[item.bodyId == tempObject.bodyId ? 'selected' : '']"
              @click="setFigure(item.bodyId, item.bodyImageUrl)"
            >
              <img
                alt="product body icon"
                :src="item.bodyImageUrl"
              >
            </div>
          </div>

          <div v-if="objectData.hairstyles" class="objectsBox color">
            <h4 class="objectTitle">
              Kolor włosów
            </h4>
            <div
              v-for="(item, index) in objectData.hairstyles"
              :key="index"
              class="objItem"
              :class="[index == tempObject.hairColor ? 'selected' : '']"
            >
              <div class="colorItem" :class="index" @click="setHairColor(index)" />
            </div>
          </div>

          <div v-if="objectData.hairstyles && objectData.hairstyles[tempObject.hairColor]" class="objectsBox">
            <h4 class="objectTitle">
              Rodzaj włosów
            </h4>

            <div v-for="(item, index) in objectData.hairstyles[tempObject.hairColor]" :key="index">
              <div
                v-for="(item1, index1) in item"
                :key="index1"
                class="objItem"
                :class="item1.hairstyleId == tempObject.hairstyleId ? 'selected' : ''"
                @click="setHairStyle(item1.hairstyleId)"
              >
                <img
                  alt="product hairstyle icon"
                  :src="item1.hairstyleImageUrl"
                >
              </div>
            </div>
          </div>
          <div v-if="objectData.type==='dog' || objectData.type==='cat'" class="objectsBox">
            <div
              v-for="(dogs, breed) in objectData"
              :key="breed"
            >
              <span class="breed">{{ breed }}</span>
              <div
                v-for="(item, index) in dogs"
                :key="index"
                class="objItem"
                :class="item.variantId == tempObject.variantId ? 'selected' : ''"
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
        <button class="add" @click="pushObject(objectData.type, tempObject.edit)">
          Zapisz
        </button>
      </div>
      <div
        v-if="showModal"
        class="modal"
      >
        <button class="closeModal" @click="showModal = false">
          ✕
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

    <Summary />
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Summary from '~/components/Cup/Summary.vue'

@Component({
  components: {
    Summary
  }
})
export default class ItemsChoice extends Vue {

}
</script>
