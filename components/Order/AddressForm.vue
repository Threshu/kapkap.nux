<template>
  <div class="row check-out">
    <div class="col-lg-12">
      <div class="row">
        <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <input
            id="isCompany"
            v-model="form.isCompany"
            type="checkbox"
            name="isCompany"
            :checked="form.isCompany"
          >
          &ensp; <label>Zamówienie firmowe</label>
        </div>
      </div>

      <div v-if="!form.isCompany" class="row">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">
            Imię
          </div>
          <input
            v-model="form.firstName"
            type="text"
            name="first_name"
            required
          >
        </div>
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">
            Nazwisko
          </div>
          <input
            v-model="form.lastName"
            type="text"
            name="last_name"
            required
          >
        </div>
      </div>

      <div v-if="form.isCompany" class="row">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">
            Nazwa firmy
          </div>
          <input
            v-model="form.companyName"
            type="text"
            name="companyName"
            required
          >
        </div>
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label">
            NIP
          </div>
          <input
            v-model="form.taxId"
            type="text"
            name="taxId"
            required
          >
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">
            Numer telefonu
          </div>
          <input
            v-model="form.phone"
            type="text"
            name="phone"
            required
          >
        </div>
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">
            Adres email
          </div>
          <input
            v-model="form.email"
            type="text"
            name="email"
            required
          >
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-6 col-sm-12 col-xs-12">
          <div class="field-label small-letters">
            Adres pocztowy
          </div>
          <input
            v-model="form.address"
            type="text"
            name="address"
            required
          >
        </div>
        <div class="form-group col-md-6 col-sm-12 col-xs-12">
          <div class="field-label small-letters">
            Miasto
          </div>
          <input
            v-model="form.city"
            type="text"
            name="city"
            required
          >
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">
            Kod pocztowy
          </div>
          <input
            v-model="form.zip"
            type="text"
            name="zip"
            required
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

@Jsonld
@Component({
  components: { Breadcrumb }
})
export default class AddressForm extends Vue {
  @Prop({ type: Object, required: false }) form!: any
}
</script>
