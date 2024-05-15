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
            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg",
            "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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