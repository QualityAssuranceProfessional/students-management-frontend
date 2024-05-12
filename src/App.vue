<script>
import ImageView from './components/ImageView.vue'
export default {
  name: 'App',
  components: {
    'image-view' : ImageView
  },
  data() {
    return {
      message : 'Hello World !! Welcome to Vue.js 3.0',
      Countries : ['Pakistan', 'India', 'USA', 'UK', 'UAE', 'Saudi Arabia' , 'Qatar'],
      IsCountryAvailable : true,
      Counter:0,
    }
  },
  methods: {
    ChangeMessage() {
      this.message = "Welcome Abdullah !!"
    },
    ChangeCountry() {
      this.IsCountryAvailable = !this.IsCountryAvailable
    }
  }
}

</script>

<template>
  <div>
    <image-view></image-view>
    <!-- <country-view></country-view>
    <counter-view></counter-view> -->
    <h1>
      {{ message }}
      <br>
      <ul v-if="IsCountryAvailable">
        <li v-for="(Country,index) in Countries" :key="Country">
          {{ Country }} - {{ index + 1}}
        </li>
      </ul> 
    </h1>
    <br />
    <button @click="ChangeMessage()">Change Message</button>
    <button @click="ChangeCountry()">
      {{ IsCountryAvailable ? 'Hide Countries' : 'Show Countries' }}
    </button>
    <br><br><br><br>
    <button @click="Counter = Counter + 1">
        Add Counter
    </button>
    <button @click="Counter=0">
        Reset Counter
    </button>
    <span style="background-color: orange;color:red;font-size:100px;">
    {{ Counter }}
    </span>
  </div>
</template>

<style scoped>
</style>
