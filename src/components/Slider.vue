<template>
    <div class="image-slider">
      <div class="slider-container">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" class="slider-image" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" />
      </div>
      <button class="prev-button" @click="prevSlide" :disabled="currentIndex === 0">Prev</button>
      <button class="next-button" @click="nextSlide" :disabled="currentIndex === images.length - 1">Next</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = ref([
    { src: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 1' },
    { src: 'https://assets.architecturaldigest.in/photos/64395fb9b2857a748b75a424/16:9/w_1600,c_limit/The%2020%20best%20new%20design%20hotels%20opening%20around%20world%20in%202023.jpg', alt: 'Image 2' },
    { src: 'https://images.pexels.com/photos/381541/pexels-photo-381541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 3' },
    { src: 'https://i.natgeofe.com/n/aa757659-77bc-47d1-921d-ff28cae782b7/RWKVL_Accommodations_Hale_TreeTopKing_01-1_4x3.jpg?w=1260&h=945', alt: 'Image 4' },
    // Add more images here
  ]);
  
  const currentIndex = ref(0);
  
  const nextSlide = () => {
    if (currentIndex.value < images.value.length - 1) {
      currentIndex.value++;
    }
  };
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  </script>
  
  <style scoped>
  .image-slider {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .slider-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slider-image {
    max-width: 100%;
    
    height: auto;
  }
  
  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    border: none;
    cursor: pointer; /* Optional: Style the buttons */
  }
  
  .prev-button {
    left: 0;
  }
  
  .next-button {
    right: 0;
  }
  
  .prev-button:disabled,
  .next-button:disabled {
    opacity: 0.5;
    cursor: default; /* Optional: Style disabled buttons */
  }
  </style>