import Vue from 'vue'

Vue.filter('currency', (value: number) => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN'
  }).format(value)
})
