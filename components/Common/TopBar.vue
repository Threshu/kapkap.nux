<i18n lang="yaml">
pl:
  topbar_title: 'Zadzwoń, jeżeli potrzebujesz dodatkowych informacji'
</i18n>

<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>{{ $t('topbar_title') }}:</li>
              <li><i class="fa fa-phone" aria-hidden="true"/> <a href="tel:+48694051344">694 051 344</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
        </div>
      </div>
    </div>
  </div>
</template>
