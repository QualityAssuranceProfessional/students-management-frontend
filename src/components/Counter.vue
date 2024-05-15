<template>
    <div class="box">
        <h3 class="h3">:حدد عدد أيام رحلتك</h3>
        <button class="add_btn" @click="Counter = Counter + 1">
        Add Day
    </button>
    <span class="counter">
    {{ Counter }}
    </span>
    <button class="reset_btn" @click="Counter=0">
        Reset 
    </button>
    
    </div>
   
</template>

<script>
export default {
    data() {
    return {
      Counter:0,
    }
  },
}
</script>

<style>
*{
    font-family: "Montserrat",sans-serif;
}
.h3{
    text-align: right;
    font-size: 8;
}
.box{
    width: 40%;
    height: auto;
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
.add_btn , .reset_btn{
    border-radius: 12;
    font-size: small;
    margin: 20px;
    
}
</style>
