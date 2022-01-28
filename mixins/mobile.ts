import { Component, Mutation, Vue } from 'nuxt-property-decorator'

@Component
export default class MobileSupport extends Vue {
  @Mutation('app/setIsMobile') setIsMobile!: Function

  checkIfMobile () {
    this.setIsMobile(window.innerWidth <= 1350)
  }

  mounted () {
    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)
  }
}
