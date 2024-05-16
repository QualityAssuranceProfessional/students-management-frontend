<template>
    <div class="book-container">
      <div class="book">
        <div class="book-cover">
          <img :src="getCurrentImage" alt="Vue.js" @mouseover="hover = true" @mouseout="hover = false" />
          <div class="overlay" v-if="hover"></div>
        </div>
      </div>
      <div class="button-container">
        <button @click="Back()">
        <i class="fas fa-arrow-left"></i>
        </button>
        <button @click="NextImage()">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import '@fortawesome/fontawesome-free/css/all.css'
  
  export default {
    data() {
      return {
        images: [
          "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1539795845756-4fadad2905ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1526270524890-379ff8cec5d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        imageNumber: 1,
        hover: false
      }
    },
    computed: {
      getCurrentImage() {
        return this.images[this.imageNumber - 1]
      }
    },
    methods: {
      NextImage() {
        if (this.imageNumber >= 4) {
          this.imageNumber = 1
        } else {
          this.imageNumber = this.imageNumber + 1
        }
      },
      Back() {
        if (this.imageNumber <= 1) {
          this.imageNumber = 4
        } else {
          this.imageNumber = this.imageNumber - 1
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  .book-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    position: relative;
  }
  
  .book {
    width: 100%;
    margin: 50px auto;
    border: 1px solid #dddddd00;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  .book-cover {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
  }
  
  .book-cover img {
  width: 100%; /* Ensure the image covers the entire width of its container */
  height: 100%; /* Ensure the image covers the entire height of its container */
  object-fit: cover; /* Cover the entire container while maintaining aspect ratio */
}
  
  .book-cover img:hover {
    transform: scale(1.1);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .book-cover:hover.overlay {
    opacity: 1;
  }
  
 .button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 215px; /* Position the container at the bottom of the image */
  left: 0;
  right: 0;
  padding: 10px 10px; /* Add padding if needed */
  box-sizing: border-box; /* Ensure padding is included in width calculation */
}
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #769cf46f;
    color: #ffffff;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #d7da1179;
  }
  
  i {
    
    font-size: 24px;
  }
  </style>