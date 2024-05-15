<template>
<div id="services" class="services section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4 class="cairo-text"><em>منظومة إدارة المدارس</em></h4>
            <h5 class="cairo-text">فروعنا</h5>
            <div class="line-dec"></div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="naccs">
            <div class="grid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="menu">
    <div v-for="(item, index) in countryItems" :key="index" class="first-thumb active">
      <div class="thumb cairo-text">
        {{ item.name }}
      </div>
    </div>
    <br>
    <br>
    <br>
    <input type="text" v-model="newCountry" @keyup.enter="addCountry" placeholder="إسم الفرع" class="cairo-text"><br>
    <button class="border-first-button cairo-text" @click="addCountry"> إضافة  </button>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Country',
  data() {
    return {
      countryItems: [
        { name: 'تركيا' },
        { name: 'ليبيا' },
        { name: 'سلوفاكيا' },
        { name: 'مالطا' },
        { name: 'ايطاليا' }
      ],
      newCountry: ''
    }
  },
  methods: {
    addCountry() {
      if (this.newCountry!== '') {
        this.countryItems.push({ name: this.newCountry });
        this.newCountry = '';
      }
    }
  }
}

</script>

<style scoped>
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
</style>