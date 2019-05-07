import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import Music from '@/views/music/Music'
import Bbs from '@/views/bbs/Bbs'
import Logon from './views/logon/logon'
import Login from './views/login/login'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: "/music",
          component:  Music 
        },
        {
          path: "/bbs",
          component:  Bbs 
        },
        {
          path: "/logon",
          component: Logon
        },
         {
          path: "/login",
          component: Login
        }
      ]
    }
  ]
})
export default router;

