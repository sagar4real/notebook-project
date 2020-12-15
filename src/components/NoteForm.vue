<template>
    <div class="container">
        <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
            <form @submit.prevent="addNote">
  <div class="mb-3">
    <label for="Title" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title">
  </div>
    <div class="mb-3">
    <label for="Note" class="form-label">NOTE</label>
    <textarea  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="description"></textarea>
  </div>

 <button type="submit" class="btn btn-primary">Post</button>



  <h4 class="text-danger">{{feedback}}</h4>
</form>
        </div>
    </div>
</template>

<script>
import db from'@/firebase/init.js'
export default {
    data(){
    return{
       title:null,
       description:null,
       feedback:null
    }
    },
    methods:{
        addNote(){
            if(this.title){
            this.feedback=null;
            db.collection('1').add({
                title:this.title,
                description:this.description
            })
            .then(()=>{
                this.$router.push({ name:'note'});
            })
            }else{
                this.feedback="you must enter the title";
            }
        }
    }
}
</script>

<style>


</style>