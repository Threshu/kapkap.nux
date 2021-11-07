<i18n lang="yaml">
pl:
  address: 'Adres pocztowy'
  contact: 'Kontakt'
  firstName: 'Imię'
  lastName: 'Nazwisko'
  email: 'Email'
  number: 'Numer'
  enterName: 'Podaj imię'
  enterLastName: 'Podaj Nazwisko'
  enterNumber: 'Podaj numer telefonu'
  enterEmail: 'Adres email'
  message: 'Treść wiadomości'
  enterMessage: 'Wiadomość'
  send: 'wyślij'
</i18n>

<template>
  <div>
    <Breadcrumb title="Kontakt" />
    <section class="contact-page section-b-space">
      <Modal v-if="showModal" :message="mMessage" xtitle="xxxxx444xxxx"/>
      <div class="container">
        <div class="row section-b-space">
          <div class="col-lg-7 map">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.7675136226107!2d18.950518315862872!3d50.2775994076853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cd932ef672f7%3A0xfa21f80d16be4653!2zRMWCdWdhIDQzLCA0MS01MDYgQ2hvcnrDs3c!5e0!3m2!1spl!2spl!4v1604351705939!5m2!1spl!2spl"
              width="600"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
          <div class="col-lg-5">
            <div class="contact-right">
              <ul>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"/>
                    <h6>{{ $t('address') }}</h6>
                  </div>
                  <div class="media-body">
                    <p>{{ companyName }}</p>
                    <p>{{ companyStreet }}, {{ companyZip }} {{ companyCity }}</p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-phone" aria-hidden="true"/>
                    <h6>{{ $t('contact') }}</h6>
                  </div>
                  <div class="media-body">
                    <img
                      style="width: auto; height: auto;"
                      src="/images/contact/qrphone.png"
                      alt="QR Code for phone number"
                    />
                    <p style="padding-left: 20px; width: auto;">{{ phoneFormatted }}</p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-envelope" aria-hidden="true"/>
                    <h6>{{ $t('email') }}</h6>
                  </div>
                  <div class="media-body">
                    <p>{{ companyMail }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="theme-form">
              <div class="form-row">
                <div class="col-md-6">
                  <label for="firstName">{{ $t('firstName') }}</label>
                  <input
                    v-model="firstName"
                    type="text"
                    class="form-control"
                    id="firstName"
                    :placeholder="$t('enterName')"
                  />
                </div>
                <div class="col-md-6">
                  <label for="lastName">{{ $t('lastName') }}</label>
                  <input
                    v-model="lastName"
                    type="text"
                    class="form-control"
                    id="lastName"
                    :placeholder="$t('enterLastName')"
                  />
                </div>
                <div class="col-md-6">
                  <label for="phoneNumber">{{ $t('number') }}</label>
                  <input
                    v-model="phoneNumber"
                    type="text"
                    class="form-control"
                    id="phoneNumber"
                    :placeholder="$t('enterNumber')"
                  />
                </div>
                <div class="col-md-6">
                  <label for="email">{{ $t('email') }}</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    :placeholder="$t('enterEmail')"
                  />
                </div>
                <div class="col-md-12">
                  <label for="message">{{ $t('enterMessage') }}</label>
                  <textarea
                    v-model="message"
                    class="form-control"
                    :placeholder="$t('message')"
                    id="message"
                    rows="6"
                  />
                </div>
                <div class="col-md-12">
                  <button
                    @click="sendMessage"
                    class="btn btn-solid"
                    type="submit">
                    {{ $t('send') }}
                  </button>
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
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import Modal from '~/components/Common/Modal.vue'

@Component({
  components: { Breadcrumb, Modal }
})
export default class Contact extends Vue {
  phone: string = <string>process.env.phone
  phoneFormatted: string = <string>process.env.phoneFormatted
  companyName: string = <string>process.env.companyName
  companyStreet: string = <string>process.env.companyStreet
  companyZip: string = <string>process.env.companyZip
  companyCity: string = <string>process.env.companyCity
  companyMail: string = <string>process.env.companyMail
  showModal: any = false
  mMessage: any = 'xsssss'

  firstName: string = ''
  lastName: string = ''
  phoneNumber: string = ''
  email: string = ''
  message: string = ''

  async sendMessage () {
    try {
      const test = await this.$axios.post("/contact/mail", {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        message: this.message
      })
      this.showModal = true
    } catch (err) {
      this.showModal = true
    }

    return false
  }
}
</script>
