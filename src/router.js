import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import Music from '@/views/music/Music'
import Bbs from '@/views/bbs/Bbs'
import Logon from './views/logon/logon'
import Login from './views/login/login'
import Recommend from './views/recommend/Recommend'
import Evaluation from './views/bbs/evaluation/Evaluation'
import Mtheory from './views/bbs/mtheory/Mtheory'
import Stave from './views/bbs/stave/Stave'
import Simple from './views/bbs/simple/Simple'
import Rank from './views/rank/Rank'
import Personal from './views/personal/Personal'
import MusicItem from './views/musicItem/MusicItem'
import Singer from './views/singer/Singer'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/recommend',
      children: [
        {
          path: "/music",
          component:  Music ,
          children:[
             {
              path: '/recommend',
              component: Recommend
            },
            {
              path: '/rank',
              component: Rank
            },
            {
              path: '/singer',
              component: Singer
            }
          ]
        },
        {
          path: '/music/:id',
          component: MusicItem
        },
        {
          path: '/personal',
          component: Personal
        },
        {
          path: "/bbs",
          component:  Bbs,
          redirect: '/evaluation',
          children: [
            {
              path: "/evaluation",
              component: Evaluation
            },
            {
              path: "/mtheory",
              component: Mtheory
            },
            {
              path: "/notation/stave",
              component: Stave
            },
            {
              path: "/notation/simple",
              component: Simple
            },
          ]
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
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.Token ? true : false;
  if(to.path === "/personal"){
    isLogin ? next() : next('/login');
  }else{
    next();
  }
});

export default router;

