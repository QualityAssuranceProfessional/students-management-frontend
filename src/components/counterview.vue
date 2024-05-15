<template>
    <div class="counter-container">
      <div class="counter-message-box">
        <div class="counter-message">
          {{ counterMessage }}
        </div>
      </div>
      <div class="button-container">
        <button @click="resetCounter" class="counter-button">تشفير العداد</button>
        <button @click="incrementCounter" class="counter-button">اضافة الابناء</button>
      </div>
      <div class="counter-display">
        <span class="counter-value">{{ Counter }}</span>
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
    background-color: #2e2e2e;
  }
  
  .counter-display {
    background-color: rgba(0, 0, 0, 0.245);
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
  }
  
  .counter-value {
    color: rgba(22, 71, 193, 0.679);
    font-size: 50px;
  }
  
  .counter-message-box {
    background-color: #0000004e;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .counter-message {
    font-size: 20px;
  }
  </style>
  