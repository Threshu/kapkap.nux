<template>
  <section class="categoryBox">
    <div v-if="showModal || showEditModal" class="overflow" />
    <div class="collection-wrapper productBoxBg">
      <div class="container">
        <div class="row">
          <div ref="productBox" class="productBox mobile">
            <div class="productViewBox">
              <div class="productView">
                <div class="productPreview">
                  <img
                    class="mobile"
                    src="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"
                  >
                </div>
              </div>
              <button class="createCup" @click="showConf = true">
                Stwórz kubek
              </button>
            </div>
          </div>

          <div v-if="showConf" ref="productModalBox" class="productBox productModalBox">
            <div v-if="showModal || showEditModal" class="overflow" />
            <div class="productViewBox">
              <button class="frontCup active">
                Przód kubka
              </button>
              <button class="backCup">
                Tył kubka
              </button>

              <div class="productView">
                <div class="productPreview">
                  <image-zoom
                    class="desktop"
                    regular="https://vifus.webd.pl/kubek.png"
                    zoom="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"
                    :zoom-amount="2"
                  />

                  <img
                    class="mobile"
                    src="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"
                  >
                </div>

                <div class="shareBox">
                  <button class="share" />
                </div>

                <span class="cupInfo">
                  Przedstawione zdjęcia mają jedynie charakter poglądowy. <br>
                  Docelowy kubek może różnić się kolorostycznie.
                </span>
              </div>
            </div>

            <div class="productConfBox">
              <div class="confMenu">
                <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" @click="openCupItems(1)" />
                <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" @click="openCupItems(2)" />
                <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" @click="openCupItems(3)" />
                <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" @click="openCupItems(4)" />
              </div>

              <div v-if="confMenu == 1">
                <h3 class="productConfBoxTitle">
                  Wybierz kubek
                </h3>

                <div v-if="cups" class="cupsList mobile">
                  <div class="cupItem" v-for="(item, index) in cups.cups"
                    :key="index"
                    @click="setCup(item.id)"
                    v-bind:class="{'selected': item.id == cupObject.cupId}"
                  >
                    <img v-if="item" :src="item.imageURL">
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="showConf = false">
                    Wstecz
                  </button>
                  <button class="next" @click="openCupItems(2)">
                    Dalej
                  </button>
                </div>
              </div>

              <div v-if="confMenu == 2">
                <h3 class="productConfBoxTitle">
                  Wybierz tło
                </h3>

                <div class="bgList mobile" v-if="cups">
                  <div class="bgItem" v-for="(item, index) in cups.bgs"
                  :key="index"
                  @click="setBg(item.id)"
                  v-bind:class="{'selected': item.id == cupObject.bgId}">
                    <img :src="item.imageURL">
                  </div>
                </div>


                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="openCupItems(1)">
                    Wstecz
                  </button>
                  <button class="next" @click="openCupItems(3)">
                    Dalej
                  </button>
                </div>
              </div>

              <div v-if="confMenu == 3">
                <h3 class="productConfBoxTitle">
                  Dodaj postać lub zwierzę
                </h3>
                <div class="objectsList">

                  <div class="objectItem" v-for="(item, index) in cupObject.items" :key="index">
                    <div class="objectRow">
                      <div class="objImage">
                        <img :src="item.bodyImageUrl">
                      </div>
                      <div class="objName">
                        {{item.name}}
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="editItem(index)" />
                        <button class="remove" @click="removeItem(index)" />
                        <button class="top" @click="topItem(index)" />
                        <button class="down"  @click="downItem(index)" />
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
                    <button class="closeModal desktop" @click="showEditModal = false">
                      ✕
                    </button>
                    <h3 class="modalTitle">
                      {{objectData.title}}
                    </h3>

                    <div class="modalContent edit">
                      <input class="objectName" type="text" placeholder="Imię" v-model="tempObject.name">

                      <div class="objectsBox" v-if="objectData.bodies">
                        <h4 class="objectTitle">Sylwetka</h4>

                        <div class="objItem"
                          v-for="(item, index) in objectData.bodies"
                          :key="index"
                          :class="item.bodyId == tempObject.figureId ? 'selected' : ''"
                          @click="setFigure(item.bodyId, item.bodyImageUrl)"
                        >
                          <img
                            alt="product body icon"
                            :src="item.bodyImageUrl"
                          >
                        </div>
                      </div>

                      <div class="objectsBox color" v-if="objectData.hairstyles">
                        <h4 class="objectTitle">
                          Kolor włosów
                        </h4>
                        <div class="objItem" v-for="(item, index) in objectData.hairstyle" :key="index"
                          :class="[index == tempObject.hairColor ? 'selected' : '']">
                          <div class="colorItem" :class="index" @click="setHairColor(index)"></div>
                        </div>
                      </div>

                      <div class="objectsBox" v-if="objectData.hairstyles && objectData.hairstyles[tempObject.hairColor]">
                        <h4 class="objectTitle">
                          Rodzaj włosów
                        </h4>

                        <div v-for="(item, index) in objectData.hairstyles[tempObject.hairColor]" :key="index">
                          <div class="objItem"
                            v-for="(item1, index1) in item"
                            :key="index1"
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

                      <div class="objectsBox" v-if="objectData.type==='dogs' || objectData.type==='cats'">
                          <div
                            v-for="(dogs, breed) in objectData"
                          >
                            <span class="breed">{{breed}}</span>
                            <div class="objItem"
                              v-for="(item, index) in dogs"
                              v-if="item.imageUrl"
                              :key="index"
                              :class="item.variantId == tempObject.variantId ? 'selected' : ''"
                              @click="setDog(item.variantId, item.imageUrl)">
                                <img
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
                  <div v-if="showModal" class="modal">
                    <button class="closeModal desktop" @click="showModal = false">
                      ✕
                    </button>
                    <h3 class="modalTitle">
                      Kogo lub co chcesz dodać?
                    </h3>

                    <div class="modalContent">
                      <div class="objItem" @click="newCupObject(womens, 'womens')">
                        <img src="/images/cup_page/sample_woman.png">
                        <span class="name">Kobietę</span>
                      </div>
                      <div class="objItem" @click="newCupObject(mens, 'mens')">
                        <img src="/images/cup_page/sample_man.png">
                        <span class="name">Mężczyznę</span>
                      </div>
                      <div class="objItem" @click="newCupObject(dogs, 'dogs')">
                        <img src="/images/cup_page/sample_dog.png">
                        <span class="name">Psa</span>
                      </div>
                      <div class="objItem" @click="newCupObject(cats, 'cats')">
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

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="openCupItems(2)">
                    Wstecz
                  </button>
                  <button class="next" @click="openCupItems(4)">
                    Dalej
                  </button>
                </div>
              </div>

              <div v-if="confMenu == 4">
                <h3 class="productConfBoxTitle">
                  Dodaj cytat
                </h3>

                <div class="quotesList mobile" v-if="cups">
                  <div class="quoteItem" v-for="(item, index) in cups.quotes"
                  :key="index"
                  @click="setQuote(item.id)"
                  v-bind:class="{'selected': item.id == cupObject.quoteId}">
                    <img :src="item.imageURL">
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="next"
                    v-if="!editMode"
                    @click="buyNow()">
                    Kup Teraz
                  </button>
                  <button class="next fl"
                    v-if="!editMode"
                    @click="addToCart()">
                    Dodaj do koszyka
                  </button>
                  <button class="next"
                    v-if="editMode"
                    @click="saveCartItem()">
                    Zapisz
                  </button>
                  <button class="next fl"
                    v-if="editMode"
                    @click="backToCart()">
                    Wróć
                  </button>
                  <button class="reset" @click="reset()">
                    Resetuj i zacznij od nowa
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="productBox desktop">
            <div class="productViewBox">
              <button class="frontCup active">
                Przód kubka
              </button>
              <button class="backCup">
                Tył kubka
              </button>

              <div class="productView">
                <div class="productPreview">
                  <image-zoom
                    class="desktop"
                    regular="https://vifus.webd.pl/kubek.png"
                    zoom="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"
                    :zoom-amount="2"
                  />

                  <img
                    class="mobile"
                    src="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"
                  >
                </div>

                <div class="shareBox">
                  <button class="share" />
                </div>

                <span class="cupInfo">
                  Przedstawione zdjęcia mają jedynie charakter poglądowy. <br>
                  Docelowy kubek może różnić się kolorostycznie.
                </span>
              </div>
            </div>

            <div id="productConfBox" class="productConfBox">
              <div class="confMenu">
                <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" @click="openCupItems(1)" />
                <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" @click="openCupItems(2)" />
                <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" @click="openCupItems(3)" />
                <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" @click="openCupItems(4)" />
              </div>

              <div v-if="confMenu == 1">
                <h3 class="productConfBoxTitle">
                  Wybierz kubek
                </h3>

                <div class="cupsList desktop" v-if="cups">
                  <div class="cupItem" v-for="(item, index) in cups.cups"
                  :key="index"
                  @click="setCup(item.id)"
                  v-bind:class="{'selected': item.id == cupObject.cupId}">
                    <img v-if="item" :src="item.imageURL">
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="showConf = false">
                    Wstecz
                  </button>
                  <button class="next" @click="openCupItems(2)">
                    Dalej
                  </button>
                </div>
              </div>

              <div
                v-if="confMenu == 2"
              >
                <h3 class="productConfBoxTitle">
                  Wybierz tło
                </h3>
                <div class="bgList desktop" v-if="cups">
                  <div class="bgItem" v-for="(item, index) in cups.bgs"
                  :key="index"
                  @click="setBg(item.id)"
                  v-bind:class="{'selected': item.id == cupObject.bgId}">
                    <img :src="item.imageURL">
                  </div>
                </div>
                <div class="paginationBox">
                  <div class="pagination">
                    <button class="prevAll">&lt;&lt;</button>
                    <button class="prev">&lt;</button>
                    <button class="page">1</button>
                    <button class="page active">2</button>
                    <button class="page">3</button>
                    <button class="page">4</button>
                    <button class="page">5</button>
                    <button class="next">></button>
                    <button class="nextAll">>></button>
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="openCupItems(1)">
                    Wstecz
                  </button>
                  <button class="next" @click="openCupItems(3)">
                    Dalej
                  </button>
                </div>
              </div>

              <div
                v-if="confMenu == 3"
              >
                <h3 class="productConfBoxTitle">
                  Dodaj postać lub zwierzę
                </h3>
                <div class="objectsList">
                  <div class="objectItem" v-for="(item, index) in cupObject.items" :key="index">
                    <div class="objectRow">
                      <div class="objImage">
                        <img :src="item.bodyImageUrl">
                      </div>
                      <div class="objName">
                        {{item.name}}
                      </div>

                      <div class="objActions">
                        <button class="edit" @click="editItem(index)" />
                        <button class="remove" @click="removeItem(index)" />
                        <button class="top" @click="topItem(index)" />
                        <button class="down"  @click="downItem(index)" />
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
                    <h3 class="modalTitle">{{objectData.title}}</h3>

                    <div class="modalContent edit">
                      <input class="objectName" type="text" placeholder="Imię" v-model="tempObject.name">

                      <div class="objectsBox" v-if="objectData.bodies">
                        <h4 class="objectTitle">Sylwetka</h4>

                        <div class="objItem" v-for="(item, index) in objectData.bodies" :key="index"
                          :class="[item.bodyId == tempObject.figureId ? 'selected' : '']"
                          @click="setFigure(item.bodyId, item.bodyImageUrl)">
                          <img
                            alt="product body icon"
                            :src="item.bodyImageUrl"
                          >
                        </div>
                      </div>

                      <div class="objectsBox color" v-if="objectData.hairstyles">
                        <h4 class="objectTitle">
                          Kolor włosów
                        </h4>
                        <div class="objItem" v-for="(item, index) in objectData.hairstyles" :key="index"
                          :class="[index == tempObject.hairColor ? 'selected' : '']">
                          <div class="colorItem" :class="index" @click="setHairColor(index)"/>
                        </div>
                      </div>

                      <div class="objectsBox" v-if="objectData.hairstyles && objectData.hairstyles[tempObject.hairColor]">
                        <h4 class="objectTitle">
                          Rodzaj włosów
                        </h4>

                        <div v-for="(item, index) in objectData.hairstyles[tempObject.hairColor]" :key="index">
                          <div class="objItem" v-for="(item1, index1) in item" :key="index1"
                            :class="item1.hairstyleId == tempObject.hairstyleId ? 'selected' : ''"
                            @click="setHairStyle(item1.hairstyleId)">
                            <img
                              alt="product hairstyle icon"
                              :src="item1.hairstyleImageUrl"
                            >
                          </div>
                        </div>
                      </div>
                      <div class="objectsBox" v-if="objectData.type==='dogs' || objectData.type==='cats'">
                        <div
                          v-for="(dogs, breed) in objectData"
                        >
                          <span class="breed">{{breed}}</span>
                          <div class="objItem"
                            v-for="(item, index) in dogs"
                            v-if="item.imageUrl"
                            :key="index"
                            :class="item.variantId == tempObject.variantId ? 'selected' : ''"
                            @click="setDog(item.variantId, item.imageUrl)">
                              <img
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
                      <div class="objItem" @click="newCupObject(womens, 'womens')">
                        <img src="/images/cup_page/sample_woman.png">
                        <span class="name">Kobietę</span>
                      </div>
                      <div class="objItem" @click="newCupObject(mens, 'mens')">
                        <img src="/images/cup_page/sample_man.png">
                        <span class="name">Mężczyznę</span>
                      </div>
                      <div class="objItem" @click="newCupObject(dogs, 'dogs')">
                        <img src="/images/cup_page/sample_dog.png">
                        <span class="name">Psa</span>
                      </div>
                      <div class="objItem" @click="newCupObject(cats, 'cats')">
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

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="openCupItems(2)">
                    Wstecz
                  </button>
                  <button class="next" @click="openCupItems(4)">
                    Dalej
                  </button>
                </div>
              </div>

              <div
                v-if="confMenu == 4"
              >
                <h3 class="productConfBoxTitle">
                  Dodaj cytat
                </h3>

                <div class="quotesList desktop" v-if="cups">
                  <div class="quoteItem" v-for="(item, index) in cups.quotes"
                  :key="index"
                  @click="setQuote(item.id)"
                  v-bind:class="{'selected': item.id == cupObject.quoteId}">
                    <img :src="item.imageURL">
                  </div>
                </div>

                <div class="paginationBox">
                  <div class="pagination">
                    <button class="prevAll">
                      &lt;&lt;
                    </button>
                    <button class="prev">
                      &lt;
                    </button>
                    <button class="page">
                      1
                    </button>
                    <button class="page active">
                      2
                    </button>
                    <button class="page">
                      3
                    </button>
                    <button class="page">
                      4
                    </button>
                    <button class="page">
                      5
                    </button>
                    <button class="next">
                      >
                    </button>
                    <button class="nextAll">
                      >>
                    </button>
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus" @click="decreaseQuantity">
                        -
                      </button>
                      <input type="number"
                        class="qty-input"
                        v-model="cupObject.count"
                        @keyup="recalculateTotal"
                      >
                      <button class="qty-plus"  @click="increaseQuantity">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      {{cupData.price}} zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Suma:</span>
                    <div class="sum-val">
                      {{cupObject.total}} zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="next"
                    v-if="!editMode"
                    @click="buyNow()">
                    Kup Teraz
                  </button>
                  <button class="next fl"
                    v-if="!editMode"
                    @click="addToCart()">
                    Dodaj do koszyka
                  </button>
                  <button class="next"
                    v-if="editMode"
                    @click="saveCartItem()">
                    Zapisz
                  </button>
                  <button class="next fl"
                    v-if="editMode"
                    @click="backToCart()">
                    Wróć
                  </button>
                  <button class="reset" @click="reset()">
                    Resetuj i zacznij od nowa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="similar">
      <h3 class="styled-page-header">
        Powiązane produkty
      </h3>

    </div>
  </section>
</template>

<script  lang="ts">
import { Component, Getter, Mutation, Action, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import Picture from '@/components/Common/Picture.vue'

import cupsJSON from '~/data/newProduct.json'
import { STATUS_LOADED } from '~/store/defaults/types'

@Component({
  components: {
    Picture
  }
})

export default class Cup extends Vue {
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('cupPreferences/dogs') dogs!: any
  @Getter('cupPreferences/cats') cats!: any
  @Getter('cupPreferences/mens') mens!: any
  @Getter('cupPreferences/womens') womens!: any
  @Getter('basket/editb') edit!: any
  @Mutation('cupPreferences/setCups') setCups!: any
  @Mutation('basket/setBasket') setBasket!: any
  @Mutation('basket/editBasket') editBasket!: any

  @Action('cupPreferences/getDogs') getDogs!: any
  @Action('cupPreferences/getCats') getCats!: any
  @Action('cupPreferences/getMens') getMens!: any
  @Action('cupPreferences/getWomens') getWomens!: any

  cups: any = cupsJSON.items
  cupData: any = cupsJSON
  showModal = false
  confMenu = 1
  showConf = false
  showEditModal = false
  removeBox = false
  removeItemId = null
  news = false
  editMode = false
  objectData: any = []

  tempObject: any = {
    type: '',
    edit: '',
    figureId: '',
    variantId: '',
    bodyImageUrl: '',
    hairColor: 'black',
    hairstyleId: ''
  }

  cupObject: any = {
    id: this.cupData.id,
    title: this.cupData.title,
    price: this.cupData.price,
    cupId: this.cups?.cups[0]?.id,
    bgId: this.cups?.bgs[0]?.id,
    quoteId: '',
    count: 0,
    total: 0,
    items: []
  }

  sliderSettings = {
    arrows: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    touchThreshold: 5,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    responsive: [{
      breakpoint: 4000,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 1500,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 1024,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        class: 'center',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }

  setCup(id: string) {
    this.cupObject.cupId = id
  }

  setBg(id: string) {
    this.cupObject.bgId = id
  }

  setQuote(id: string) {
    this.cupObject.quoteId = id
  }

  setHairColor(color: string) {
    this.tempObject.hairColor = color
  }

  setFigure(figureId: string, bodyImageUrl: string) {
    this.tempObject.figureId = figureId
    this.tempObject.bodyImageUrl = bodyImageUrl
  }

  setDog(variantId: any, bodyImageUrl: any) {
    this.tempObject.variantId = variantId
    this.tempObject.bodyImageUrl = bodyImageUrl
  }

  setHairStyle(hairstyleId: string) {
    this.tempObject.hairstyleId = hairstyleId
  }

  pushObject(type: any, edit: any) {
    this.tempObject.type = type
    if (edit != '') {
      this.cupObject.items[edit] = this.tempObject
    } else {
      this.cupObject.items.push(this.tempObject)
    }
    this.showEditModal = false
    this.resetTempObject();
  }

  editCancel() {
    this.showEditModal = false
    this.resetTempObject()
    this.objectData = []
  }

  editItem(itemIndex: any) {
    this.tempObject = this.cupObject.items[itemIndex]
    this.showModal = false
    this.showEditModal = true
    this.tempObject = this.cupObject.items[itemIndex]
    if (itemIndex) {
      this.tempObject.edit = itemIndex

    }

    switch(this.tempObject.type) {
      case 'cats':
        this.objectData = this.cats
        this.objectData.type = this.tempObject.type
        break;
      case 'dogs':
        this.objectData = this.dogs
        this.objectData.type = this.tempObject.type
        break;
      case 'womens':
        this.objectData = this.womens
        this.objectData.type = this.tempObject.type
        break;
      case 'mens':
        this.objectData = this.mens
        this.objectData.type = this.tempObject.type
        break;
    }
  }

  removeItem(itemId: any, confirmRemove: Boolean = false) {
    if (confirmRemove) {
      this.cupObject.items.splice(itemId, 1);
      this.removeItemId = null
    } else {
      this.removeItemId = itemId
    }
  }

  resetTempObject() {
    this.tempObject = {
      name: '',
      type: '',
      edit: '',
      figureId: '',
      variantId: '',
      bodyImageUrl: '',
      hairColor: 'black',
      hairstyleId: ''
    }
  }

  newCupObject(data: Object, type: String) {
    this.objectData = data
    this.showModal = false
    this.objectData.type = type
    this.showEditModal = true
  }

  moveArrayItemToNewIndex(arr: any, old_index: number, new_index: number) {
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
      return arr
  }

  topItem(index: number) {
    this.moveArrayItemToNewIndex(this.cupObject.items, index, index-1)
  }

  downItem(index: number) {
    this.moveArrayItemToNewIndex(this.cupObject.items, index, index+1)
  }

  openCupItems(id: number) {
    this.confMenu = id
  }

  buyNow() {
    console.log("KUP TERAZ OBIEKT:", this.cupObject)
  }

  addToCart() {
    var tempStorage: any = []
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
    }
    tempStorage.push(this.cupObject)
    this.setBasket(tempStorage)
  }

  formatPrice(value: number) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  recalculateTotal() {
    this.cupObject.total = this.formatPrice(this.cupData.price * this.cupObject.count)
  }

  increaseQuantity() {
    this.cupObject.count++
    this.recalculateTotal()
  }

  decreaseQuantity() {
    this.cupObject.count--
    this.recalculateTotal()
  }

  reset() {
    this.confMenu = 1
    this.cupObject = {
      id: this.cupData.id,
      cupId: this.cups.cups[0].id,
      bgId: this.cups.bgs[0].id,
      quoteId: '',
      items: []
    }
    this.resetTempObject()
  }

  setupEdit() {
    var editObj = JSON.parse(localStorage.cup)
    if (editObj[this.$store.state.basket.edit]) {
      this.editMode = true
      this.cupObject = editObj[this.$store.state.basket.edit]
    }
  }

  saveCartItem() {
    var tempStorage: any = []
    if (localStorage.cup) {
      tempStorage = JSON.parse(localStorage.cup)
    }
    tempStorage[this.$store.state.basket.edit] = this.cupObject
    this.setBasket(tempStorage)
    this.reset()
    this.editBasket(null)
    this.$router.push('/koszyk')
  }

  backToCart() {
    this.editBasket(null)
    this.reset()
    this.$router.push('/koszyk')
  }

  randomIntFromInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  pickRandomProperty(obj: Object) {
      var result;
      var count = 0;
      for (var prop in obj)
          if (Math.random() < 1/++count)
             result = prop;
      return result;
  }

  setStartObjects() {
    var count = this.randomIntFromInterval(2, 4)
    var i = 0
    while (i < count) {
      var typeRand = this.randomIntFromInterval(1, 4)
      switch (typeRand) {
        case 1:
          if (this.mens) {
            var randBody = this.randomIntFromInterval(0, this.mens.bodies.length-1)
            var randHair = this.randomIntFromInterval(0, this.mens.hairstyles['black']['all'].length-1)
            this.cupObject.items.push({
              type: 'mens',
              figureId: this.mens.bodies[randBody].bodyId,
              bodyImageUrl: this.mens.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: this.mens.hairstyles['black']['all'][randHair].hairstyleId
            })
          }
        break;
        case 2:
          if (this.womens) {
            var randBody = this.randomIntFromInterval(0, this.womens.bodies.length-1)
            var randHair = this.randomIntFromInterval(0, this.womens.hairstyles.black.bun.length-1)
            this.cupObject.items.push({
              type: 'womens',
              figureId: this.womens.bodies[randBody].bodyId,
              bodyImageUrl: this.womens.bodies[randBody].bodyImageUrl,
              hairColor: 'black',
              hairstyleId: this.womens.hairstyles.black.bun[randHair].hairstyleId
            })
          }
        break;
        case 3:
          var randProp = this.pickRandomProperty(this.dogs)
          if (randProp) {
            this.cupObject.items.push({
              type: 'dogs',
              figureId: this.dogs[randProp][0].id,
              variantId: this.dogs[randProp][0].variantId,
              bodyImageUrl: this.dogs[randProp][0].imageUrl,
            })
          }
        break;
        case 4:
          var randProp = this.pickRandomProperty(this.cats)
          if (randProp) {
            this.cupObject.items.push({
              type: 'cats',
              figureId: this.cats[randProp][0].id,
              variantId: this.cats[randProp][0].variantId,
              bodyImageUrl: this.cats[randProp][0].imageUrl,
            })
          }
        break;
      }

      i++;
    }
  }

  created () {
    if (Number.isInteger(this.$store.state.basket.edit)) {
      this.setupEdit()
    } else {
      this.increaseQuantity()
    }

    this.setCups(cupsJSON)
    this.getDogs()
    this.getCats()
    this.getMens()
    this.getWomens()
    this.$store.dispatch("cupPreferences/getDogs").then(dogs => {
      this.setStartObjects()
    });

  }

}
</script>

<style lang="sass">
</style>
