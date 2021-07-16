<template>
  <div>
    <Breadcrumb title="404" />

    <section class="p-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="error-section">
              <h1>404</h1>
              <h2>nie znaleźliśmy szukanej strony</h2>
              <NuxtLink
                to="/"
                class="btn btn-solid"
              >
                Przejdź do strony głównej
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

export default {
  components: { Breadcrumb }
}
</script>
