<script>
import ImageView from './components/ImageView.vue'
import CountryView from './components/countryview.vue'
import CounterView from './components/counterview.vue'
export default {
  name: 'App',
  components: {
    'image-view' : ImageView,
    'country-view' : CountryView,
    'counter-view' : CounterView
  },

}

</script>

<template>
  <div>
    <image-view></image-view>
    <country-view></country-view>
    <counter-view></counter-view>
  </div>
</template>

<style scoped>
</style>
