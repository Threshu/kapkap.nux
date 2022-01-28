<template>
  <div class="header-container">
    <div
      v-if="showOverlay"
      class="overlay"
    />
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
          @click="onCloseBox"
        />
      </div>

      <TopBar />
      <div :class="`container ${!headerMessage || !showMessage ? 'top' : ''}`">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <LogoImage :enable-json-ld="true" />
                </div>
              </div>
              <div class="menu-right pull-right">
                <NavBar
                  @showOverlay="showOverlay = true"
                  @hideOverlay="showOverlay = false"
                />
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
import { Component, Getter, Watch } from 'nuxt-property-decorator'
import LogoImage from '../LogoImage.vue'
import CartWidget from './CartWidget.vue'
import NavBar from './NavBar.vue'
import TopBar from './TopBar.vue'
import { STATUS_LOADED } from '~/store/defaults/types'
import MobileSupport from '~/mixins/mobile'

@Component({
  components: { TopBar, NavBar, CartWidget, LogoImage }
})
export default class Header extends MobileSupport {
  @Getter('defaults/headerMessages') headerMessages!: string[]
  @Getter('app/isMobile') isMobile!: boolean
  @Getter('defaults/isLoaded') isLoaded!: boolean

  headerMessage: string = ''
  showMessage: boolean = true
  messageIndex: number = 0
  showOverlay: boolean = false

  @Watch('isMobile')
  @Watch('$route')
  onChange () {
    this.showMessage = !(this.$route.fullPath.match(/^\/(?:kubek|edytuj-produkt)/) && this.isMobile)
  }

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    if (this.isLoaded) {
      this.processMessages()
    } else {
      this.$store.watch(state => state.defaults.status, (newValue: string) => {
        if (newValue === STATUS_LOADED) {
          this.processMessages()
        }
      })
    }
  }

  processMessages () {
    if (this.headerMessages) {
      this.headerMessage = this.headerMessages[0]
      setInterval(() => {
        if (this.messageIndex >= this.headerMessages.length) {
          this.messageIndex = 0
        }
        this.headerMessage = this.headerMessages[this.messageIndex++]
      }, 5000)
    }
  }

  handleScroll () {
    const header = document.querySelector('#sticky > .container')
    const headerHeight = 51

    if (header) {
      if (window.scrollY > headerHeight && !header.className.includes('scrolled')) {
        header.classList.add('scrolled')
      } else if (window.scrollY < headerHeight) {
        header.classList.remove('scrolled')
      }
    }
  }

  onCloseBox () {
    this.showMessage = false
  }
}
</script>
