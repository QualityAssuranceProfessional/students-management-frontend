<script>
import AppHader from './views/AppHader.vue';
import AppFooter from './views/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHader,
    AppFooter
  },

}

</script>

<template>
  <div>
    <AppHader />
    <router-view style="padding-top:200px;"></router-view>
    <AppFooter />
  </div>
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
