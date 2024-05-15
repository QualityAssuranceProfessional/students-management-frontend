<template>
<h1 class="m-5">{{ message }}</h1>
     
      <div class="list-group list-group-numbered"  v-if="IsCountryAvailable">
  
          <a class="list-group-item" id="list"  v-for="(Country) in Countries" :key="Country">
          {{ Country}} 
          </a>
     
        </div> 
    
    <br />
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-info" @click="ChangeMessage()">Change Message</button>
    <button type="button" class="btn btn-outline-info" @click="ChangeCountry()">
      {{ IsCountryAvailable ? 'Hide Countries' : 'Show Countries' }}
    </button>
    </div>
    
</template>
<!-------------------------------------------------------------------------------->
<script>
export default {
data() {
    return {
        message : 'Hello World !! Welcome to Vue.js 3.0',
        Countries : ['Pakistan', 'India', 'USA', 'UK', 'UAE', 'Saudi Arabia' , 'Qatar'],
      IsCountryAvailable : true
     
    }
  },
  methods: {
    ChangeMessage() {
      this.message = "Welcome Amani !!"
    },
  ChangeCountry() {
      this.IsCountryAvailable = !this.IsCountryAvailable
    }
  
}
}
</script>
<!-------------------------------------------------------------------------------->
<style scoped>
h1{
  /*font-family:  "Noto Sans", sans-serif;*/
  font-family: "Cormorant Garamond", serif;
  margin-top: 30px;
  color: rgb(43, 43, 44);

}
#list{
  list-style-type: none;
  float: left;
  color:rgb(102, 101, 105);
  background-color: rgb(248, 249, 251);
}
#list:hover{
    color: #747bff;
  }
  .btn{
    color: #747bff;
    border-color: #747bff;
  }
  .btn:hover{
    color: rgb(240, 240, 246);
    background-color: #747bff;
  }
</style>