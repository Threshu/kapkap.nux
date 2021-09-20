<template>
  <section class="categoryBox">
    <div class="overflow" v-if="showModal == true || showEditModal == true"></div>
    <div class="collection-wrapper productBoxBg">
      <div class="container">
        <div class="row">
            <div class="productBox" ref="productBox">
                <div class="productViewBox">
                    <button class="frontCup active">Przód kubka</button>
                    <button class="backCup">Tył kubka</button>

                    <div class="productView">
                        <div class="productPreview">

                            <image-zoom class="desktop"
                              regular="https://vifus.webd.pl/kubek.png"
                              zoom="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"
                              :zoom-amount="2">        
                            </image-zoom>

                            <img class="mobile" src="https://kapkap.eu/assets/images/main-page/top-slider/05838_220153_front_clipped_rev_1.png"/>
                        </div>

                        <div class="shareBox">
                            <button class="share"></button>
                        </div>

                        <span class="cupInfo">
                            Przedstawione zdjęcia mają jedynie charakter poglądowy. </br>
                            Docelowy kubek może różnić się kolorostycznie.
                        </span>
                    </div>
                </div>


              <div class="productConfBox" id="productConfBox">
              <div class="confMenu">
                <div :class="`confMenu1 ${confMenu === 1 ? 'active' : ''}`" v-on:click="confMenu = 1"></div>
                <div :class="`confMenu2 ${confMenu === 2 ? 'active' : ''}`" v-on:click="confMenu = 2"></div>
                <div :class="`confMenu3 ${confMenu === 3 ? 'active' : ''}`" v-on:click="confMenu = 3"></div>
                <div :class="`confMenu4 ${confMenu === 4 ? 'active' : ''}`" v-on:click="confMenu = 4"></div>
              </div>

              <div v-if="confMenu == 1">
                <h3 class="productConfBoxTitle">Wybierz Kubek</h3>

                <div class="cupsList mobile">
                  <VueSlickCarousel
                    v-if="news && news.length"
                    v-bind="cupSettings"
                  >
                      <template>
                        <div class="cupItem ">
                          <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                        </div>
                      </template>
                      <template>
                        <div class="cupItem selected">
                          <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                        </div>
                      </template>
                      <template>
                        <div class="cupItem ">
                          <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                        </div>
                      </template>
                      <template>
                        <div class="cupItem ">
                          <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                        </div>
                      </template>
                  </VueSlickCarousel>
                </div>

                <div class="cupsList desktop">
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>
                  <div class="cupItem selected">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>
                  <div class="cupItem ">
                    <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/optimized/kubek-bialy.png"/>
                  </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                        <button class="qty-minus">-</button>
                        <input type="number" class="qty-input"/>
                        <button class="qty-plus">+</button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">59.99 zł</div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">119.98 zł</div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">Wstecz</button>
                  <button class="next">Dalej</button>
                </div>
              </div>

              <div v-if="confMenu == 2">
                  <h3 class="productConfBoxTitle">Wybierz tło</h3>
                  <div class="bgList desktop">
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


                  <div class="bgList mobile">
                    <VueSlickCarousel
                      v-if="news && news.length"
                      v-bind="cupSettings"
                    >
                        <template>
                          <div class="bgItem">
                              <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                          </div>
                        </template>
                        <template>
                          <div class="bgItem">
                              <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                          </div>
                        </template>
                        <template>
                          <div class="bgItem">
                              <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                          </div>
                        </template>
                        <template>
                          <div class="bgItem selected">
                              <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                          </div>
                        </template>
                        <template>
                          <div class="bgItem selected">
                              <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                          </div>
                        </template>
                        <template>
                          <div class="bgItem selected">
                              <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                          </div>
                        </template>
                        <template>
                          <div class="bgItem selected">
                              <img src="https://d3vejpae6rnkkg.cloudfront.net/assets/cup_photos/back-14391_191721_front.webp"/>
                          </div>
                        </template>
                    </VueSlickCarousel>
                  </div>


                  <div class="summary">
                    <div class="qty-box">
                      <span class="qty-label">Sztuk:</span>
                      <div class="qty-flex">
                          <button class="qty-minus">-</button>
                          <input type="number" class="qty-input"/>
                          <button class="qty-plus">+</button>
                      </div>
                    </div>

                    <span class="price-sep">x</span>

                    <div class="price-box">
                      <span class="price-label">Cena za sztukę:</span>
                      <div class="price-val">59.99 zł</div>
                    </div>

                    <span class="sum-sep">=</span>

                    <div class="sum-box">
                      <span class="sum-label">Cena sumaryczna:</span>
                      <div class="sum-val">119.98 zł</div>
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
                    <div class="objectRow">
                      <div class="objImage">
                          <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp"/>
                      </div>
                      <div class="objName">Fafik</div>
                      <div class="objActions">
                          <button class="edit" v-on:click="showEditModal = true"></button>
                          <button class="remove" v-on:click="removeBox = true"></button>
                          <button class="top"></button>
                          <button class="down"></button>
                      </div>
                    </div>
                    <div class="removeBox" v-if="removeBox == true">
                      <button class="cancelRemove" v-on:click="removeBox = false">Anuluj</button>
                      <button class="acceptRemove">Usun</button>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                          <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp"/>
                      </div>
                      <div class="objName">Fafik</div>
                      <div class="objActions">
                          <button class="edit" v-on:click="showEditModal = true"></button>
                          <button class="remove" v-on:click="removeBox = true"></button>
                          <button class="top"></button>
                          <button class="down"></button>
                      </div>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                          <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp"/>
                      </div>
                      <div class="objName">Fafik</div>
                      <div class="objActions">
                          <button class="edit" v-on:click="showEditModal = true"></button>
                          <button class="remove" v-on:click="removeBox = true"></button>
                          <button class="top"></button>
                          <button class="down"></button>
                      </div>
                    </div>
                  </div>

                  <div class="objectItem">
                    <div class="objectRow">
                      <div class="objImage">
                          <img src="https://kapkap.eu/static/media/one-dog.02c1a9bb.webp"/>
                      </div>
                      <div class="objName">Fafik</div>
                      <div class="objActions">
                          <button class="edit" v-on:click="showEditModal = true"></button>
                          <button class="remove" v-on:click="removeBox = true"></button>
                          <button class="top"></button>
                          <button class="down"></button>
                      </div>
                    </div>
                  </div>



                  <button class="addNew" v-on:click="showModal = true">Dodaj</button>
  
                    <div class="modal" v-if="showEditModal == true">
                      <button class="closeModal" v-on:click="showEditModal = false">✕</button>
                      <h3 class="modalTitle">Kobieta</h3>

                      <div class="modalContent edit">
                        <input  class="objectName" type="text" value="Imie"/>
                        
                        <div class="objectsBox">
                          <h4 class="objectTitle">Sylwetka</h4>

                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/women_body/90/2_spring_style4.webp">
                          </div>
                        </div>    

                        <div class="objectsBox color">
                          <h4 class="objectTitle">Kolor włosów</h4>

                          <div class="objItem">
                            <div class="colorItem" style="background: #BD967A;"></div>
                          </div>
                          <div class="objItem">
                            <div class="colorItem" style="background: #E8C2A4;"></div>
                          </div>
                          <div class="objItem">
                            <div class="colorItem" style="background: #DC9213;"></div>
                          </div>
                          <div class="objItem">
                            <div class="colorItem" style="background: #1C1C1C;"></div>
                          </div>
                          <div class="objItem">
                            <div class="colorItem" style="background: #5D3800;"></div>
                          </div>
                        </div>

                        <div class="objectsBox">
                          <h4 class="objectTitle">Rodzaj włosów</h4>

                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                          <div class="objItem">
                            <img alt="product body icon" src="https://d3vejpae6rnkkg.cloudfront.net/female_hairstyle/90/black/bun_hair/female_hair_black_11.webp">
                          </div>
                        </div>
                      </div>

                      <button class="cancel" v-on:click="showEditModal = false">Anuluj</button>
                      <button class="add" >Zapisz</button>
                    </div>  
                    <div class="modal" v-if="showModal == true">
                      <button class="closeModal" v-on:click="showModal = false">✕</button>
                      <h3 class="modalTitle">Jakie obiekty chcesz dodac?</h3>

                      <div class="modalContent">

                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem selected">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>                      
                        <div class="objItem">
                          <img src="https://kapkap.eu/static/media/female.50388f42.webp"/>
                          <span class="name">Postać</span>
                        </div>
                      </div>

                      <button class="cancel" v-on:click="showModal = false">Anuluj</button>
                      <button class="add" >Dodaj</button>
                    </div>
                </div>

                <div class="summary">
                  <div class="qty-box">
                    <span class="qty-label">Sztuk:</span>
                    <div class="qty-flex">
                        <button class="qty-minus">-</button>
                        <input type="number" class="qty-input"/>
                        <button class="qty-plus">+</button>
                    </div>
                  </div>

                  <span class="price-sep">x</span>

                  <div class="price-box">
                    <span class="price-label">Cena za sztukę:</span>
                    <div class="price-val">59.99 zł</div>
                  </div>

                  <span class="sum-sep">=</span>

                  <div class="sum-box">
                    <span class="sum-label">Cena sumaryczna:</span>
                    <div class="sum-val">119.98 zł</div>
                  </div>
                </div>

                <div class="confButtons">
                  <button class="back">Wstecz</button>
                  <button class="next">Dalej</button>
                </div>
              </div>

            <div v-if="confMenu == 4">
              <h3 class="productConfBoxTitle">Dodaj cytat</h3>

              <div class="quotesList desktop">
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

              <div class="quotesList mobile">
                <VueSlickCarousel
                  v-if="news && news.length"
                  v-bind="cupSettings"
                >
                    <template>
                      <div class="quoteItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                      </div>
                    </template>
                    <template>
                      <div class="quoteItem selected">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                      </div>
                    </template>
                    <template>
                      <div class="quoteItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                      </div>
                    </template>
                    <template>
                      <div class="quoteItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                      </div>
                    </template>
                    <template>
                      <div class="quoteItem">
                        <img src="https://d3vejpae6rnkkg.cloudfront.net/quotes/90/cytaty_06a.png"/>
                      </div>
                    </template>
                </VueSlickCarousel>
              </div>

              <div class="summary">
                <div class="qty-box">
                  <span class="qty-label">Sztuk:</span>
                  <div class="qty-flex">
                      <button class="qty-minus">-</button>
                      <input type="number" class="qty-input"/>
                      <button class="qty-plus">+</button>
                  </div>
                </div>

                <span class="price-sep">x</span>

                <div class="price-box">
                  <span class="price-label">Cena za sztukę:</span>
                  <div class="price-val">59.99 zł</div>
                </div>

                <span class="sum-sep">=</span>

                <div class="sum-box">
                  <span class="sum-label">Cena sumaryczna:</span>
                  <div class="sum-val">119.98 zł</div>
                </div>
              </div>

              <div class="confButtons">
                <button class="next">Dodaj do koszyka</button>
                <button class="next fl">Dalej</button>
                <button class="reset">Resetuj i zacznij od nowa</button>
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

<div id="app">

</div>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import imageZoom from 'vue-image-zoomer';
import VueSlickCarousel from 'vue-slick-carousel'
import newsJSON from '~/data/news.json'
import Picture from '@/components/Common/Picture'


@Component({
  components: {
    VueSlickCarousel,
    Picture,
    imageZoom
  }
})

export default class Cup extends Vue {
  confMenu = 1
  showModal = false
  showEditModal = false
  removeBox = false
  news = newsJSON

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


  cupSettings = {
    arrows: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    touchThreshold: 5,
    speed: 250,
    focusOnSelect: true,
    dots: false,
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
        arrows: true,
        class: 'center',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  }

  mounted() {
    let scrollHeight = this.$refs["productBox"].offsetTop
    window.scrollTo(0, scrollHeight - 50)
  }

}
</script>
  