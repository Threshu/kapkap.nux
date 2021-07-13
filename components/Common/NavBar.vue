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
        :class="`nav-menu ${mobileNav && 'show'}`"
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
          v-for="[option, key] in menuOptions"
        >
          <li
            v-if="option.children"
            :key="key"
            class="mega-menu"
          >
            <NuxtLink
              to="#"
              class="dropdown"
              @click="(e) => handleSubmenu(e)"
              @mouseenter="() => setOverlayShown(true)"
              @mouseleave="() => setOverlayShown(false)"
            >
              {{ option.title }}
              <span class="sub-arrow" />
            </NuxtLink>
            <div
              class="mega-menu-container"
              @mouseleave="() => setOverlayShown(false)"
              @mouseenter="() => setOverlayShown(true)"
            >
              <div class="container">
                <div class="row">
                  <img
                    src="/images/menu-cup.png"
                    alt="kubek"
                    class="white-mug"
                  >

                  <template
                    v-for="[suboption, groupKey] in option.children"
                  >
                    <div
                      :key="groupKey"
                      class="col mega-box"
                    >
                      <div class="link-section">
                        <div class="menu-title">
                          <h5
                            @click="(e) => handleMegaSubmenu(e)"
                          >
                            {{ suboption.title }}
                          </h5>
                        </div>
                        <div class="menu-content">
                          <ul>
                            <template
                              v-for="[productOption, optionKey] in suboption.children"
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
              @click="switchNav"
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
import { Vue } from 'nuxt-property-decorator'

type menuItem = {
  title: string,
  link?: string,
  children?: menuItem[]
}

export default class NavBar extends Vue {
  menuOptions: menuItem[] = []
  mobileNav: boolean = false

  // onSwitchNav () {
  //   if (event.target.parentElement.parentElement.parentElement.classList.contains('open-submenu')) {
  //     document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
  //     event.target.parentElement.parentElement.parentElement.classList.remove('open-submenu')
  //   } else {
  //     changeMobileNav(!mobileNav)
  //     setOverlayShown(false)
  //   }
  // }

  // setOverlayShown (event) {
  //   if (window.innerWidth > 1200) {
  //     const overlay = document.querySelector('.overlay')
  //     const menu = document.querySelector('.mega-menu-container')
  //     if (event === true) {
  //       overlay.style.display = 'block'
  //       menu.style.display = 'block'
  //     } else {
  //       overlay.style.display = 'none'
  //       menu.style.display = 'none'
  //     }
  //   }
  // }
  //
  // handleSubmenu (event) {
  //   if (event.target.classList.contains('sub-arrow')) { return }
  //
  //   if (event.target.nextElementSibling.classList.contains('opensubmenu')) { event.target.nextElementSibling.classList.remove('opensubmenu') } else {
  //     document.querySelectorAll('.nav-submenu').forEach(function (value) {
  //       value.classList.remove('opensubmenu')
  //     })
  //     document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
  //     event.target.nextElementSibling.classList.add('opensubmenu')
  //     event.target.parentElement.parentElement.classList.add('open-submenu')
  //   }
  // }
  //
  // handleMegaSubmenu (event) {
  //   if (event.target.classList.contains('sub-arrow')) { return }
  //
  //   if (event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu')) { event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu') } else {
  //     document.querySelectorAll('.menu-content').forEach(function (value) {
  //       value.classList.remove('opensubmegamenu')
  //     })
  //     event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
  //   }
  // }
}
</script>
