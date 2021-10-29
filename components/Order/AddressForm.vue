<template>
  <div class="row check-out">
    <div class="col-lg-12">
      <div class="row">
        <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <input
            type="checkbox"
            name="isCompany"
            v-model="form.isCompany"
            id="isCompany"
            :checked="form.isCompany"
          />
          &ensp; <label>Zamówienie firmowe</label>
        </div>
      </div>

      <div class="row" v-if="!form.isCompany">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">Imię</div>
          <input
              type="text"
              name="first_name"
              :value="form.firstName"
          />
        </div>
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">Nazwisko</div>
          <input
              type="text"
              name="last_name"
              :value="form.lastName"
          />
        </div>
      </div>

      <div class="row" v-if="form.isCompany">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">Nazwa firmy</div>
          <input
              type="text"
              name="companyName"
              :value="form.companyName"
          />
        </div>
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label">NIP</div>
          <input
              type="text"
              name="taxId"
              :value="form.taxId"
          />
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">Numer telefonu</div>
          <input
              type="text"
              name="phone"
              :value="form.phone"
          />
        </div>
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">Adres email</div>
          <input
              type="text"
              name="email"
              :value="form.email"
          />
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-6 col-sm-12 col-xs-12">
          <div class="field-label small-letters">Adres pocztowy</div>
          <input type="text"
                 name="address"
                 :value="form.address"
          />
        </div>
        <div class="form-group col-md-6 col-sm-12 col-xs-12">
          <div class="field-label small-letters">Miasto</div>
          <input type="text" name="city" :value="form.city"/>
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-6 col-sm-6 col-xs-12">
          <div class="field-label small-letters">Kod pocztowy</div>
          <input type="text" name="zip"
                 :value="form.zip"
          />
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

