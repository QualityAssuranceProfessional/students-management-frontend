<script>
import ImageView from './components/ImageView.vue'
import Country from './components/countries.vue'
import Counter from './components/CounterView.vue'

export default {
  name: 'App',
  components: {
    'image-view' : ImageView,
    'country-view' : Country,
    'counter-view' : Counter
  },

}

</script>

<template>
<country-view></country-view>
<br>
<br>
<counter-view></counter-view>
</template>

<style scoped>
  button {
    font-size: 1em;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #d231e1;
    color: #fff;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #35495e;
  }
  
  button:active {
    background-color: #2c3e50;
  }

</style>
