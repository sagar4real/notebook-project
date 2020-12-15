<template>
        <div class="index note">
 <div class="container">
   <div class="text-center">
     <h3 class="display-4 header ">NOTE</h3>
     <router-link :to="{ name:'noteform'}" >
<div class="add animate__animated animate__bounceIn ">
<i class="fas fa-plus"></i>

</div>

     </router-link>
     <router-link :to="{name:'note'}">
<button class="btn btn-outline-primary"> SHOW NOTE</button>
     </router-link>
      
   </div>
 </div>
  </div>

</template>

<script>

export default {
    data(){
        return{
       
        }
    },
    methods:{

    }
   
}
</script>

<style>
.header{
  margin-top:25px;
}
.add{
  height:50px;
  width:50px;
  background:#86aba1;
  margin:auto;
  margin-top:30px;
  border-radius:50%;
}
.add i{
  margin-top:13px;
  font-size:1.5rem;
  color:white;

}
.index .btn{
    margin-top:50px;
}
</style>