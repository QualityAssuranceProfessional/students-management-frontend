<template>
    <div class="counter-container">
        <div class="row">
            <div class="col-lg-12">
      <div class="counter-message-box">
        <div class="counter-message">
          {{ counterMessage }}
        </div>
      </div>
      
      <div class="button-container">
        <button @click="resetCounter" class="border-first-button">تشفير العداد</button>
        <button @click="incrementCounter" class="border-first-button">اضافة الابناء</button>
      </div>
      <div class="counter-display">
        <span class="counter-value">{{ Counter }}</span>
      </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        Counter: 0,
      };
    },
    computed: {
      counterMessage() {
        if (this.Counter === 0) {
          return "قم بتحديد عدد الابناء";
        } else {
          return `: العداد الآن عند ${this.Counter} استمر كذلك`;
        }
      }
    },
    methods: {
      incrementCounter() {
        this.Counter++;
      },
      resetCounter() {
        this.Counter = 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .counter-container {
    text-align: center;
  }
  
  .button-container {
    margin-bottom: 20px;
  }
  
  .counter-button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #323ddf48;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .counter-button:hover {
    color: #fa65b1 !important;
  }
  
  .counter-display {
    background-color: rgba(211, 211, 211, 0.116);
        display: inline-block;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
  }
  
  .counter-value {
    color: #726ae3;
    font-size: 50px;
  }
  
  .counter-message-box {
    background-color: rgba(211, 211, 211, 0.116);
    border-radius: 10px;
    margin: 20px;
    border:none;
    width:600px ;
    height:50px ;
    align-items: center;
    display: inline-block;
  }
  
  .counter-message {
    font-size: 20px;
   padding-top: 7px;
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
  .border-first-button:hover {
   background-color: #fa65b1;
   color: #fff !important;
  }

  </style>
  