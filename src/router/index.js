import Vue from 'vue'
import Router from 'vue-router'
import Note from'@/components/Notes'
import NoteForm from'@/components/NoteForm'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/note',
      name:'note',
      component:Note
    },
    {
      path:'/noteform',
      name:'noteform',
      component:NoteForm
    }
  ]
})
