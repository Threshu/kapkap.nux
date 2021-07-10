<template>
  <div class="header-container">
    <div class="overlay" />
    <header
      id="sticky"
      :class="`sticky ${headerMessage && showMessage ? 'open-messages-box' : ''}`"
    >
      <div
        v-if="headerMessage && showMessage"
        class="messages-top-box"
      >
        <span>{{ headerMessage }}</span>
        <button
          class="close"
          @click="closeBox"
        />
      </div>

      <TopBar />

      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <LogoImage :logo="logoName" />
                </div>
              </div>
              <div class="menu-right pull-right">
                <NavBar />
                <div class="icon-nav">
                  <CartWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LogoImage from '~/components/Common/LogoImage.vue'
import CartWidget from '~/components/Common/CartWidget.vue'
import NavBar from '~/components/Common/NavBar.vue'
import TopBar from '~/components/Common/TopBar.vue'

@Component({
  components: { TopBar, NavBar, CartWidget, LogoImage }
})
export default class Header extends Vue {
  headerMessage = ''
  showMessage = true
  logoName = ''

  closeBox () {}
}
</script>
