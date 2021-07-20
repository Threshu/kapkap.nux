<template>
  <div>
    <Breadcrumb :title="categoryName" />

    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm-3 collection-filter">
              <StickyBox offset-top="{20}" offset-bottom="{20}">
                <div>
                  <Filter />
                  <NewProduct />
                  <div class="collection-sidebar-banner">
                    <a href="/#">
                      <img src="{`${process.env.PUBLIC_URL}/assets/images/side-banner.png`}" class="img-fluid" alt="">
                    </a>
                  </div>
                </div>
              </StickyBox>
              {/*side-bar banner end here*/}
            </div>
            <div class="collection-content col">
              <div class="page-main-content ">
                <div class="">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="top-banner-wrapper">
                        <a href="/#"><img src="{`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`}" class="img-fluid" alt=""></a>
                        <div class="top-banner-content small-section">
                          <h4>fashion</h4>
                          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        </div>
                      </div>
                      <div class="collection-product-wrapper">
                        <div class="product-top-filter">
                          <div class="container-fluid p-0">
                            <div class="row">
                              <div class="col-xl-12">
                                <div class="filter-main-btn">
                                  <span
                                    onClick="{this.openFilter}"
                                    class="filter-btn btn btn-theme"
                                  ><i
                                    class="fa fa-filter"
                                    aria-hidden="true"
                                  /> Filter</span>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12">
                                <FilterBar on-layout-view-clicked="{(colmuns)" =>
                                  this.LayoutViewClicked(colmuns)}/>
                                </filterbar>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*Products Listing Component*/}
                        <ProductListing col-size="{this.state.layoutColumns}/" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

const names = {
  'dla-par': 'Kubki dla par',
  'z-kotami': 'Kubki z kotami',
  'z-psami': 'Kubki z psami',
  'ze-znajomymi': 'Kubki ze znajomymi'
}

@Component({
  components: { Breadcrumb }
})
export default class Category extends Vue {
  @Prop({ type: String, required: true }) categoryName!: string

  get categoryName () {
    return names[alias]
  }
}
</script>
