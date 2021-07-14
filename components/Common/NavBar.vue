<template>
  <div class="main-navbar">
    <div id="mainnav">
      <div
        class="toggle-nav"
        @click="onSwitchNav"
      >
        <i class="fa fa-bars sidebar-bar" />
      </div>
      <ul
        :class="`nav-menu ${mobileNav ? 'show': ''}`"
      >
        <li
          class="back-btn"
          @click="onSwitchNav"
        >
          <div class="mobile-back text-right">
            <span>Back</span>
            <i class="fa fa-angle-right pl-2" aria-hidden="true" />
          </div>
        </li>

        <template
          v-for="(option, key) in menuOptions"
        >
          <li
            v-if="option && typeof option.children !== 'undefined'"
            :key="key"
            class="mega-menu"
            @mouseenter="setOverlayShown(true)"
            @mouseleave="setOverlayShown(false)"
          >
            <NuxtLink
              to="#"
              class="dropdown"
              @click="handleSubmenu"
            >
              {{ option.title }}
              <span class="sub-arrow" />
            </NuxtLink>
            <div
              v-if="isMenuOpened"
              :class="`mega-menu-container ${isMenuOpened ? 'opensubmenu' : ''}`"
              @mouseenter="setOverlayShown(true)"
              @mouseleave="setOverlayShown(false)"
            >
              <div class="container">
                <div class="row">
                  <img
                    src="/images/menu-cup.png"
                    alt="kubek"
                    class="white-mug"
                  >

                  <template
                    v-for="(suboption, groupKey) in option.children"
                  >
                    <div
                      :key="groupKey"
                      class="col mega-box"
                    >
                      <div class="link-section">
                        <div class="menu-title">
                          <h5
                            @click="handleMegaSubmenu"
                          >
                            {{ suboption.title }}
                          </h5>
                        </div>
                        <div
                          v-if="suboption && typeof suboption.children !== 'undefined'"
                          class="menu-content"
                        >
                          <ul>
                            <template
                              v-for="(productOption, optionKey) in suboption.children"
                            >
                              <li :key="optionKey">
                                <NuxtLink
                                  :to="productOption.link"
                                  class="nav-link"
                                  @click="onSwitchNav"
                                >
                                  {{ productOption.title }}
                                </NuxtLink>
                              </li>
                            </template>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </li>

          <li
            v-else
            :key="key"
          >
            <NuxtLink
              :to="option.link"
              class="nav-link"
              @click="onSwitchNav"
            >
              {{ option.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { useWindowSize } from '@vueuse/core'
// eslint-disable-next-line import/no-named-default
import { default as menu } from './menu.json'

@Component
export default class NavBar extends Vue {
  menuOptions: any = []
  mobileNav = false
  isMenuOpened = false

  mounted () {
    this.menuOptions = menu
  }

  onSwitchNav (event: any) {
    console.log('onSwitchNav', event)

    if (event.target.parentElement.parentElement.parentElement.classList.contains('open-submenu')) {
      this.isMenuOpened = false
      event.target.parentElement.parentElement.parentElement.classList.remove('open-submenu')
    } else {
      this.mobileNav = !this.mobileNav
      this.setOverlayShown(false)
    }
  }

  setOverlayShown (show: boolean) {
    const size: any = useWindowSize()
    if (size.width.value > 1200) {
      if (show === true) {
        this.$emit('showOverlay')
        this.isMenuOpened = true
      } else {
        this.$emit('hideOverlay')
        this.isMenuOpened = false
      }
    }
  }

  handleSubmenu (event: any) {
    console.log('handleSubmenu', event)
    if (event.target.classList.contains('sub-arrow')) { return }

    if (event.target.nextElementSibling.classList.contains('opensubmenu')) { event.target.nextElementSibling.classList.remove('opensubmenu') } else {
      document.querySelectorAll('.nav-submenu').forEach(function (value) {
        value.classList.remove('opensubmenu')
      })
      this.isMenuOpened = false
      event.target.nextElementSibling.classList.add('opensubmenu')
      event.target.parentElement.parentElement.classList.add('open-submenu')
    }
  }

  handleMegaSubmenu (event: any) {
    console.log('handleMegaSubmenu', event)
    if (event.target.classList.contains('sub-arrow')) { return }

    if (event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu')) { event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu') } else {
      document.querySelectorAll('.menu-content').forEach(function (value) {
        value.classList.remove('opensubmegamenu')
      })
      event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
    }
  }
}
</script>
