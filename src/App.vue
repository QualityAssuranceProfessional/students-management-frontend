<script>
import ImageView from './components/ImageView.vue'
import Slider from './components/Slider.vue'
import NavBar from './components/NavBar.vue'  
import Country from './components/Country.vue'
import Counter from './components/Counter.vue'
export default {
  name: 'App',
  components: {
    'image-view' : ImageView,
    'slider' : Slider,
    'nav-bar' : NavBar,
    'country-view' : Country,
    'counter-view' : Counter
  },
  data() {
    return {

    }
  },
 
  methods: {
   
  }
}

</script>

<template>
  <div>
    <nav-bar></nav-bar>
    <br> <br>
    <slider></slider>
    <br><br>
    <country-view></country-view>
    <counter-view></counter-view>

    <!-- <image-view></image-view> -->
    <!-- <country-view></country-view>
    <counter-view></counter-view> -->
    
   
  </div>
</template>

<style >
</style>
