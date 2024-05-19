<script>
export default {
 data() {
    return { 
      Counter:0
    }
 }
}
</script>
<!-------------------------------------------------------------------------------->
<template>
<br><br><br><br>
<div class="btn-group" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-info coun" @click="Counter = Counter + 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
    </button>
    <span type="button" class="btn btn-outline-info coun" >
    {{ Counter }}
    </span>
    <button type="button" class="btn btn-outline-info coun" @click="Counter = Counter - 1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
</svg>
    </button>
</div>
   
   
  
</template>
<!-------------------------------------------------------------------------------->
<style scoped>
.btn{
    color: #747bff;
    border-color: #747bff;
    text-align: center;
   
  }
  .btn:hover{
    color: rgb(240, 240, 246);
    background-color: #747bff;
    border-color: #747bff;
  }
 
  
</style>