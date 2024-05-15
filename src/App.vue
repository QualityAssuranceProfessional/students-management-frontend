
<script>
import ImageView from './components/ImageView.vue'
import CountryView from './components/CountryView.vue'
import CounterView from './components/CounterView.vue'
export default {
  name: 'App',
  components: {
    'image-view' : ImageView,
    'country-view' : CountryView,
    'counter-view' : CounterView
  }
}

</script>
<!-------------------------------------------------------------------------------->
<template>
  <div class="container">
    <image-view></image-view>
    <country-view></country-view>
    <counter-view></counter-view>
  </div>
</template>
<!-------------------------------------------------------------------------------->
<style scoped>
</style>
