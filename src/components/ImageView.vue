<template>
   

   <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
 
 <div class="carousel-inner d-flex">
   
     <div class="carousel-item active" data-bs-interval="5000">
        <div v-for="(im,index) in images" :key="im">
        <img class="rounded"  v-if="imageNumber==(index+1)"  :src="im" alt="Vue.js" />
        </div>
       
     </div>
 </div>

 <button class="carousel-control-prev" @click="Back()" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" @click="NextImage()" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
 </button>
</div>
    
</template>
<!-------------------------------------------------------------------------------->
<script>
export default {
    data() {
        return {
            images : [
            "https://t4.ftcdn.net/jpg/03/14/92/75/240_F_314927575_yqFMAuXFTNC6gBflR2njRZ4bQb8dAb7y.jpg",
            "https://t3.ftcdn.net/jpg/02/88/62/32/240_F_288623293_iDK3bYl6ZMUUwQ7MhlqLynWg3LkuespD.jpg",
            "https://t4.ftcdn.net/jpg/02/00/14/63/240_F_200146338_NTWg7HF65p5z6IUIXzxJbkJ5zlEt3gnG.jpg",
            "https://t4.ftcdn.net/jpg/03/08/69/75/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
        ],
        imageNumber: 1
        }
    },
    methods: {
        NextImage() {
            if(this.imageNumber>=4){
                this.imageNumber = 1
            }
            else{
                this.imageNumber = this.imageNumber + 1
            }
        },
        Back() {
            if(this.imageNumber<=1){
                this.imageNumber = 4
            }
            else{
                this.imageNumber = this.imageNumber - 1
            }
        }
    }
    
}
</script>
<!-------------------------------------------------------------------------------->
<style scoped>
.carousel{
    margin-top: 50px;
}
</style>