<template>

  <nav class="navbar">
    <div class="container">
       
      <ul >
        <li >
            <a href="">إتصل بنا</a>
          </li>
        <li >
            <a href="">من نحن</a>
        </li>
      <li >
        <a href="">خدماتنا</a>
        </li>
        <li >
            <a href="">الرئيسية</a>
        </li>
        </ul>
    </div>
  </nav>

</template>


<script>
export default {

}
</script>

<style>
*{
   
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat",sans-serif; 
}
nav{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-left: 10%;
    padding-right: 10%;
}
nav ul li{
    list-style-type: none;
    display: inline-block;
    padding: 10px 20px;

}

nav ul li a{
    color: rgb(139, 136, 136);
    text-decoration: none;
    font-weight: bold;
}
nav ul li a:hover{
    color: rgb(48, 139, 182);

}
</style>