<template>
    <div class="note container">
   <div class="note-box" v-for="note in notes" :key="note.id">
    <div class="card card-style">
        <div class="card-body">
            <h3 clss="card-title" style="color:#30475e">
                {{note.title}}
            </h3>
            <p class="lead card-text">
                {{note.description}}
            </p>
            <i @click="deleteNote(note.id)" class="far fa-trash-alt text-danger"></i>
           
        </div>
       
    </div>
   </div>  
    </div>
</template>

<script>
import db from'@/firebase/init'
export default {
    data(){
        return{
        notes:[],
        }
    },
    methods:{
        deleteNote(id){
        db.collection('1').doc(id).delete()
        .then(()=>{
            this.notes=this.notes.filter(note=>{
                return note.id != id;
            })
        });        
        }
    },
    created(){
        // fetching data from firestore
        db.collection('1').get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                console.log(doc.data(),doc.id);
                let datas= doc.data();
                datas.id=doc.id;
                this.notes.push(datas);
            })
        })
    }
}
</script>

<style >
.note{
    display:flex;
    flex-wrap: nowrap;
}
.note-box{
    margin-top:100px;
}
.card-style{
    margin-right:10px;
    background:#bedcfa;
}
.feedback{
    margin:auto;
    margin-top:50px;
    color:Red;
}
</style>