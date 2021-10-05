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
                <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" @click="confMenu = 1" />
                <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" @click="confMenu = 2" />
                <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" @click="confMenu = 3" />
                <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" @click="confMenu = 4" />
              </div>

              <div v-if="confMenu == 1">
                <h3 class="productConfBoxTitle">
                  Wybierz Kubek
                </h3>

                <div class="cupsList mobile">
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                  <div class="cupItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="showConf = false">
                    Wstecz
                  </button>
                  <button class="next">
                    Dalej
                  </button>
                </div>
              </div>

              <div v-if="confMenu == 2">
                <h3 class="productConfBoxTitle">
                  Wybierz tło
                </h3>

                <div class="bgList mobile">
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">
                    Wstecz
                  </button>
                  <button class="next">
                    Dalej
                  </button>
                </div>
              </div>

              <div v-if="confMenu == 3">
                <h3 class="productConfBoxTitle">
                  Dodaj obiekty
                </h3>
                <div class="objectsList">
                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
                    </div>
                    <div v-if="removeBox" class="removeBox">
                      <button class="cancelRemove" @click="removeBox = false">
                        Anuluj
                      </button>
                      <button class="acceptRemove">
                        Usun
                      </button>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
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
                      Kobieta
                    </h3>

                    <div class="modalContent edit">
                      <input class="objectName" type="text" value="Imie">

                      <div class="objectsBox">
                        <h4 class="objectTitle">
                          Sylwetka
                        </h4>

                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                      </div>

                      <div class="objectsBox color">
                        <h4 class="objectTitle">
                          Kolor włosów
                        </h4>

                        <div class="objItem">
                          <div class="colorItem" style="background: #BD967A;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #E8C2A4;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #DC9213;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #1C1C1C;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #5D3800;" />
                        </div>
                      </div>

                      <div class="objectsBox">
                        <h4 class="objectTitle">
                          Rodzaj włosów
                        </h4>

                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                      </div>
                    </div>

                    <button class="cancel" @click="showEditModal = false">
                      Anuluj
                    </button>
                    <button class="add">
                      Zapisz
                    </button>
                  </div>
                  <div v-if="showModal" class="modal">
                    <button class="closeModal" @click="showModal = false">
                      ✕
                    </button>
                    <h3 class="modalTitle">
                      Jakie obiekty chcesz dodać?
                    </h3>

                    <div class="modalContent">
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem selected">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
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
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">
                    Wstecz
                  </button>
                  <button class="next">
                    Dalej
                  </button>
                </div>
              </div>

              <div v-if="confMenu == 4">
                <h3 class="productConfBoxTitle">
                  Dodaj cytat
                </h3>

                <div class="quotesList mobile">
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="next">
                    Dodaj do koszyka
                  </button>
                  <button class="next fl">
                    Dalej
                  </button>
                  <button class="reset">
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
                <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" @click="confMenu = 1" />
                <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" @click="confMenu = 2" />
                <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" @click="confMenu = 3" />
                <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" @click="confMenu = 4" />
              </div>

              <div v-if="confMenu == 1">
                <h3 class="productConfBoxTitle">
                  Wybierz Kubek
                </h3>

                <div class="cupsList desktop">
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                  <div class="cupItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png">
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back" @click="showConf = false">
                    Wstecz
                  </button>
                  <button class="next">
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
                <div class="bgList desktop">
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
                  </div>
                  <div class="bgItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp">
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
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">
                    Wstecz
                  </button>
                  <button class="next">
                    Dalej
                  </button>
                </div>
              </div>

              <div
                v-if="confMenu == 3"
              >
                <h3 class="productConfBoxTitle">
                  Dodaj obiekty
                </h3>
                <div class="objectsList">
                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
                    </div>
                    <div v-if="removeBox" class="removeBox">
                      <button class="cancelRemove" @click="removeBox = false">
                        Anuluj
                      </button>
                      <button class="acceptRemove">
                        Usun
                      </button>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp">
                      </div>
                      <div class="objName">
                        Fafik
                      </div>
                      <div class="objActions">
                        <button class="edit" @click="showEditModal = true" />
                        <button class="remove" @click="removeBox = true" />
                        <button class="top" />
                        <button class="down" />
                      </div>
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
                      Kobieta
                    </h3>

                    <div class="modalContent edit">
                      <input class="objectName" type="text" value="Imie">

                      <div class="objectsBox">
                        <h4 class="objectTitle">
                          Sylwetka
                        </h4>

                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp"
                          >
                        </div>
                      </div>

                      <div class="objectsBox color">
                        <h4 class="objectTitle">
                          Kolor włosów
                        </h4>

                        <div class="objItem">
                          <div class="colorItem" style="background: #BD967A;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #E8C2A4;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #DC9213;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #1C1C1C;" />
                        </div>
                        <div class="objItem">
                          <div class="colorItem" style="background: #5D3800;" />
                        </div>
                      </div>

                      <div class="objectsBox">
                        <h4 class="objectTitle">
                          Rodzaj włosów
                        </h4>

                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                        <div class="objItem">
                          <img
                            alt="product body icon"
                            src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp"
                          >
                        </div>
                      </div>
                    </div>

                    <button class="cancel" @click="showEditModal = false">
                      Anuluj
                    </button>
                    <button class="add">
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
                      Jakie obiekty chcesz dodac?
                    </h3>

                    <div class="modalContent">
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem selected">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
                      </div>
                      <div class="objItem">
                        <img src="https://kapkap.eu/static/media/female.50388f42.webp">
                        <span class="name">Postać</span>
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
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">
                    Wstecz
                  </button>
                  <button class="next">
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

                <div class="quotesList desktop">
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
                  </div>
                  <div class="quoteItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png">
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
                      <button class="qty-minus">
                        -
                      </button>
                      <input type="number" class="qty-input">
                      <button class="qty-plus">
                        +
                      </button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">
                      59.99 zł
                    </div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">
                      119.98 zł
                    </div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="next">
                    Dodaj do koszyka
                  </button>
                  <button class="next fl">
                    Dalej
                  </button>
                  <button class="reset">
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
      <VueSlickCarousel
        v-if="news && news.length"
        v-bind="sliderSettings"
      >
        <template
          v-for="(image, key) in news"
        >
          <div
            :key="key"
            class="bestseller-item"
          >
            <span
              v-if="image.news"
              class="promotion new"
            >
              Nowość
            </span>
            <NuxtLink
              :to="image.url"
            >
              <Picture
                :path="`/images/main-page/news/${image.filename}`"
                :alt="image.alt"
              />
            </NuxtLink>
            <h3>{{ image.title }}</h3>

            <NuxtLink
              class="ch2-btn"
              :to="image.url"
            >
              Personalizuj
            </NuxtLink>
          </div>
        </template>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import imageZoom from 'vue-image-zoomer'
import VueSlickCarousel from 'vue-slick-carousel'
import Picture from '@/components/Common/Picture'

@Component({
  components: {
    VueSlickCarousel,
    Picture,
    imageZoom
  }
})

export default class Cup extends Vue {
  showModal = false
  confMenu = 1
  showConf = false
  showEditModal = false
  removeBox = false
  news = false
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

  mounted () {
    const scrollHeight = this.$refs.productBox.offsetTop
    window.scrollTo(0, scrollHeight - 50)
  }

  @Watch('showConf')
  onShowConfChanged (val = string, oldVal = string) {
    const el = document.body
    if (val) {
      el.classList.add('noScroll')
    } else {
      el.classList.remove('noScroll')
    }
  }
}
</script>

<style lang="sass">
</style>
