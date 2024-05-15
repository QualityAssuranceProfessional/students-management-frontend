<template>
  <div>
    <h1>
      {{ message }}
      <br>
      <br>
      <br>
        <h2 class="h2">الرحلات المتوفرة لشهر مايو </h2>
      <br>
      <div class="countries">
      <ul class="list" v-if="IsCountryAvailable">
        <div>
            <li class="country-box" v-for="(Country) in Countries" :key="Country">
          {{ Country }} 
        </li>
        </div>
        
      </ul> 
    </div>
    </h1>
    <br />
    <!-- <button @click="ChangeMessage()">Change Message</button> -->
    <button @click="ChangeCountry()">
      {{ IsCountryAvailable ? 'Hide Countries' : 'Show Countries' }}
    </button>
    <br><br><br><br>
  </div>
</template>

<script>
export default {
    data() {
        return{
            message : 'شركة اليقين للسفر والسياحة تتمنى لكم رحلة سعيدة',
      Countries : ['تركيا', 'الهند', 'جزر بالي', 'كازاخستان', 'اليونان', 'الامارات ' , 'عمان', 'ايطاليا'],
      IsCountryAvailable : true,
        }
    },
    methods: {
    //     ChangeMessage() {
    //   this.message = ""
    // },
    ChangeCountry() {
      this.IsCountryAvailable = !this.IsCountryAvailable
    }
    }
}
</script>

<style>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.country {
    margin-right: 20px;
  font-size: 32px;
}

.countries{
    max-width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.country-box{
    border-radius: 9px;
    background: #FFFFFF;
    box-shadow: -6px -6px 20px rgb(182, 180, 180),
                6px 6px 20px rgba(0,0,0,0.1);
                cursor: pointer;
    margin: 20px;
    font-size: 32px; 
    display: inline-block;
    padding: 20px;

    
}
.h2{
    text-align: right;
    font-size: 24;
}
</style>>