import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser // şuanki kullanıcı alınır
  // console.log('current user in auth guards : ', user); 
  if(!user) {
    next( { name: 'welcome' } )
  }else{
    next()
  }
}
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser // şuanki kullanıcı alınır
  if(user) {
    next( { name: 'chatroom' } )
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: () => import('@/views/ChatRoom.vue'),
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
