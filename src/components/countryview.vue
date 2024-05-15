<template>
    <div>
      <nav>
        <h1>{{ message }}</h1>
      </nav>
      <div>
        <select v-model="selectedCountry" @change="updateCountryVisibility">
          <option value="all">-- اختر البلد --</option>
          <option v-for="(country, index) in Countries" :value="index" :key="index">{{ country }}</option>
        </select>
      </div>
      <ul v-if="IsCountryAvailable" class="country-list">
        <li v-for="(Country, index) in Countries" :key="Country" :class="{ 'country-item': true, 'highlighted': index % 2 === 0 }">
          <span class="country-name">{{ Country }}</span> - <span class="item-number">{{ index + 1 }}</span>
        </li>
      </ul> 
      <br />
      <div>
        <button @click="ChangeMessage">اضغط للتأكيد</button>
        <button @click="ChangeCountry" style="margin-left: 500px;">
          {{ IsCountryAvailable ? 'اخفاء البلدان' : 'عرض البلدان' }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'قم بإختيار بلدك من القائمة المنسدلة',
        Countries: ['ليبيا', 'مصر', 'تونس', 'العراق', 'فلسطين', 'السعودية', 'سوريا'],
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
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Font Awesome 5 Free';
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