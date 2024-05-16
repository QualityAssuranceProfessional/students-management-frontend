<template>
<div id="services" class="services section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                      <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4 class="cairo-text"><em>منظومة إدارة المدارس</em></h4>
          </div>
            <nav>
        <h1>{{ message }}</h1>
        <br>
        <div class="line-dec"></div>
      </nav>
      <br>
      <div>
        <select v-model="selectedCountry" @change="updateCountryVisibility">
          <option value="all" selected="selected">-- اختر البلد --</option>
          <option v-for="(country, index) in Countries" :value="index" :key="index">{{ country }}</option>
        </select>
      </div>
      <br>
      <ul v-if="IsCountryAvailable" class="country-list">
        <li v-for="(Country, index) in Countries" :key="Country" :class="{ 'country-item': true, 'highlighted': index % 2 === 0 }">
          <span class="country-name">{{ Country }}</span> - <span class="item-number">{{ index + 1 }}</span>
        </li>
      </ul> 
      <br />
      <input type="text" v-model="newCountry" @keyup.enter="addCountry" placeholder="إسم الفرع" class="cairo-text"><br>
    <button class="border-first-button cairo-text" @click="addCountry"> إضافة  </button>
      <div>
        <button class="border-first-button" @click="ChangeMessage">اضغط للتأكيد</button>
        <button class="border-first-button" @click="ChangeCountry" style="margin-left: 500px;">
          {{ IsCountryAvailable ? 'اخفاء البلدان' : 'عرض البلدان' }}
        </button>
      </div>
      </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      message: 'قم بإختيار بلدك من القائمة المنسدلة',
      Countries: ['ليبيا', 'مصر', 'تونس', 'العراق', 'فلسطين', 'السعودية', 'سوريا'],
      newCountry: '',
      IsCountryAvailable: true,
      selectedCountry: null,
    };
  },
  methods: {
    ChangeMessage() {
      this.message = "شكرا لزيارتك منصتنا";
    },
    ChangeCountry() {
      this.IsCountryAvailable = !this.IsCountryAvailable;
    },
    updateCountryVisibility() {
      if (this.selectedCountry === "all") {
        this.IsCountryAvailable = true;
        this.message = 'قم بإختيار بلدك من القائمة المنسدلة';
      } else {
        this.IsCountryAvailable = false;
        this.message = `قمت بإختيار : ${this.Countries[this.selectedCountry]}`;
      }
    },
    addCountry() {
      if (this.newCountry.trim()!== '') {
        this.Countries.push(this.newCountry);
        this.newCountry = '';
        this.selectedCountry = this.newCountry;
        this.saveCountries();
      }
    },
  },
};
</script>


<style scoped>
  input {
    padding: 10px;
    margin: 10px;
    border:none;
    border-bottom: 1px solid #fa65b1;
    background-color: rgba(211, 211, 211, 0.116);
    border-radius: 3px;
  }
  .border-first-button {
    margin: 10px;
    background-color: #fff;
    cursor: pointer;
    display: inline-block !important;
    padding: 10px 20px !important;
    color: #fa65b1 !important;
    border: 1px solid #fa65b1 !important;
    border-radius: 23px;
    font-weight: 500 !important;
    letter-spacing: 0.3px !important;
    transition: all .5s;
  }
  
  .country-list {
    list-style: none;
    padding: 0;
  }
  
  .country-item {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .highlighted {
    background-color: #1028c130; /* Apply desired background color */
  }
  
  .country-name {
    flex: 1;
  }
  
  .item-number {
    margin-left: 10px;
  }
</style>