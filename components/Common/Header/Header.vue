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
      <div :class="`container ${headerMessage == '' || showMessage == false ? 'top' : ''}`">
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
import { Component, Getter, Watch, Vue } from 'nuxt-property-decorator'
import LogoImage from '../LogoImage.vue'
import CartWidget from './CartWidget.vue'
import NavBar from './NavBar.vue'
import TopBar from './TopBar.vue'
import { STATUS_LOADED } from '~/store/defaults/types'

@Component({
  components: { TopBar, NavBar, CartWidget, LogoImage }
})
export default class Header extends Vue {
  @Getter('defaults/headerMessages') headerMessages!: string[]
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('app/isMobile') isMobile!: boolean

  headerMessage: string = ''
  showMessage: boolean = true
  messageIndex: number = 0
  showOverlay: boolean = false
  routeName: any = this.$route?.name
  @Watch('routeName')
  onChangeRoute (value: boolean) {
    console.log('xxxccc', value)
  }

  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    if (this.isLoaded) {
      this.processMessages()
    } else {
      this.$store.watch(state => state.defaults.status, (newValue: string) => {
        if (newValue === STATUS_LOADED) {
          this.processMessages()
        }
      })
    }

    if (this.$route.name && this.$route.name.includes('kubek') && this.isMobile) {
      this.showMessage = false
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
     let header = document.querySelector("#sticky > .container");
     if (header) {
        if (window.scrollY > 51 && !header.className.includes('scrolled')) {
          header.classList.add('scrolled'); 
        } else if (window.scrollY < 51) {
          header.classList.remove('scrolled');
        }
     }
  }

  onCloseBox () {
    this.showMessage = false
  }
}
</script>
