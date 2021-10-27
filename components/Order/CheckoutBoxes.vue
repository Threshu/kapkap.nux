<template>
    <div class="input-box shipping-box">
        <h4>{{title}}</h4>
        <ul class="icons shipping-select-container">
            <li v-for="(type, index) in types" class="shipping-option" :key="`shipping-${type.id}`">
                <input
                    type="radio"
                    :name="group"
                    :id="`${group}-${type.id}`"
                    :checked="selected === index"
                />
                <label class="corner-picker" :htmlFor="`${group}-${type.id}`" v-html="type.label"></label>
            </li>
        </ul>
    </div>

</template>


<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Jsonld } from 'nuxt-jsonld'

@Jsonld
@Component({
  components: {}
})

export default class checkoutBoxes extends Vue {
    @Prop({ type: String, required: false }) title!: any
    @Prop({ type: String, required: false }) group!: any
    @Prop({ type: Array, required: false }) types!: any
    @Prop({ type: Number, required: false }) selected!: any
};
</script>
