<template>
  <section class="categoryBox">
    <div class="collection-wrapper productBoxBg">
      <div class="container">
        <div class="row">
            <div class="productBox">
                <div class="productConfBox" id="productConfBox">
              <div class="confMenu">
                <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" v-on:click="confMenu = 1"></div>
                <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" v-on:click="confMenu = 2"></div>
                <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" v-on:click="confMenu = 3"></div>
                <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" v-on:click="confMenu = 4"></div>
              </div>

              <div v-if="confMenu == 1">
                <h3 class="productConfBoxTitle">Wybierz Kubek</h3>

                <div class="cupsList">
                  <div class="cupItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>

                  <div class="cupItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>

                  <div class="cupItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>

                  <div class="cupItem">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <button class="qty-minus">-</button>
                    <input type="number" class="qty-input"/>
                    <button class="qty-plus">+</button>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">59.99 zł</div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">119.98 zl</div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">Wstecz</button>
                  <button class="next">Dalej</button>
                </div>
            </div>

            <div v-if="confMenu == 2">
                <h3 class="productConfBoxTitle">Wybierz tlo</h3>
                <div class="bgList">
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem selected">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                    <div class="bgItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                    </div>
                </div>

                <div class="paginationBox">
                  <div class="pagination">
                    <button class="prevAll"><<</button>
                    <button class="prev"><</button>
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
                    <button class="qty-minus">-</button>
                    <input type="number" class="qty-input"/>
                    <button class="qty-plus">+</button>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">59.99 zł</div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">119.98 zl</div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">Wstecz</button>
                  <button class="next">Dalej</button>
                </div>
            </div>

            <div v-if="confMenu == 3">
              <h3 class="productConfBoxTitle">Dodaj obiekty</h3>

              <div class="objectsList">

                <div class="objectItem">
                    <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp"/>
                    </div>
                    <div class="objName">Fafik</div>
                    <div class="objActions">
                        <button class="edit"></button>
                        <button class="remove"></button>
                        <button class="top"></button>
                        <button class="down"></button>
                    </div>
                </div>

                <div class="objectItem">
                    <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp"/>
                    </div>
                    <div class="objName">Fafik</div>
                    <div class="objActions">
                        <button class="edit"></button>
                        <button class="remove"></button>
                        <button class="top"></button>
                        <button class="down"></button>
                    </div>
                </div>

                <div class="objectItem">
                    <div class="objImage">
                        <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp"/>
                    </div>
                    <div class="objName">Fafik</div>
                    <div class="objActions">
                        <button class="edit"></button>
                        <button class="remove"></button>
                        <button class="top"></button>
                        <button class="down"></button>
                    </div>
                </div>
                <button class="addNew">+ Dodaj</button>
              </div>

              <div class="summary">
                <div class="qty-box">
                  <span class="qty-label">Sztuk:</span>
                  <button class="qty-minus">-</button>
                  <input type="number" class="qty-input"/>
                  <button class="qty-plus">+</button>
                </div>

                <span class="price-sep">x</span>

                <div class="price-box">
                  <span class="price-label">Cena za sztukę:</span>
                  <div class="price-val">59.99 zł</div>
                </div>

                <span class="sum-sep">=</span>

                <div class="sum-box">
                  <span class="sum-label">Cena sumaryczna:</span>
                  <div class="sum-val">119.98 zl</div>
                </div>
              </div>

              <div class="confButtons">
                <button class="back">Wstecz</button>
                <button class="next">Dalej</button>
              </div>
            </div>

            <div v-if="confMenu == 4">
              <h3 class="productConfBoxTitle">Dodaj cytat</h3>

              <div class="quotesList">
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem selected">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
                <div class="quoteItem">
                  <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                </div>
              </div>

              <div class="paginationBox">
                <div class="pagination">
                  <button class="prevAll"><<</button>
                  <button class="prev"><</button>
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
                  <button class="qty-minus">-</button>
                  <input type="number" class="qty-input"/>
                  <button class="qty-plus">+</button>
                </div>

                <span class="price-sep">x</span>

                <div class="price-box">
                  <span class="price-label">Cena za sztukę:</span>
                  <div class="price-val">59.99 zł</div>
                </div>

                <span class="sum-sep">=</span>

                <div class="sum-box">
                  <span class="sum-label">Cena sumaryczna:</span>
                  <div class="sum-val">119.98 zl</div>
                </div>
              </div>

              <div class="confButtons">
                <button class="next">Dodaj do koszyka</button>
                <button class="next">Dalej</button>
                <button class="reset">Resetuj i zacznij od nowa</button>
              </div>
            </div>
        </div>


        <div class="productViewBox">
          <button class="frontCup active">Przód kubka</button>
          <button class="backCup">Tył kubka</button>

          <div class="productView">
            <div class="productPreview">
              <img src="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"/>
            </div>

            <div class="shareBox">
              <button class="share"></button>
              <button class="search"></button>
            </div>

            <span class="cupInfo">
              Przedstawione zdjęcia mają jedynie charakter poglądowy. </br>
              Docelowy kubek może różnić się kolorostycznie.
            </span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Cup extends Vue {
  confMenu = 1
}
</script>
