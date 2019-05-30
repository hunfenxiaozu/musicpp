import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import Music from '@/views/music/Music'
import Bbs from '@/views/bbs/Bbs'
import Logon from './views/logon/logon'
import Login from './views/login/login'
import Recommend from './views/recommend/Recommend'

import Evaluation from './views/bbs/evaluation/Evaluation'
import EvaDetail from './views/bbs/evaluation/evaDetail/EvaDetail'
import Mtheory from './views/bbs/mtheory/Mtheory'
import VideoDetail from './views/bbs/mtheory/videodetail/VideoDetail'
import Forum from './views/bbs/forum/Forum'
import ForumDetail from './views/bbs/forum/evaDetail/EvaDetail'
import MusicScore from './views/bbs/musicscore/MusicScore'

import Rank from './views/rank/Rank'
import MusicItem from './views/musicItem/MusicItem'
import Singer from './views/singer/Singer'
import SingerDetail from './views/singer/singerDetail/SingerDetail'
import HeCollection from './views/singer/singerDetail/heCollection/MyCollection'
import HeContribute from './views/singer/singerDetail/heContribute/MyContribute'
import HeFollow from './views/singer/singerDetail/heFollow/MyFollow'

import Personal from './views/personal/Personal'
import MyCollection from './views/personal/myCollection/MyCollection'
import MyContribute from './views/personal/myContribute/MyContribute'
import MyFollow from './views/personal/myFollow/MyFollow'
import MyInformation from './views/personal/myInformation/MyInformation'
import MusicDetail from "./views/bbs/musicscore/musicDetail/MusicDetail";


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
          path: "/eva-detail",
          component: EvaDetail
        },
        {
          path: "/video-detail",
          component: VideoDetail
        },
        {
          path: "/music-detail",
          component: MusicDetail
        },
        {
          path: "/forum-detail",
          component: ForumDetail
        },
        {
          path: '/SingerDetail',
          component: SingerDetail,
          children: [
            {
              path: '/hecollection',
              component: HeCollection
            },{
              path: '/hecontribute',
              component: HeContribute
            },{
              path: '/hefollow',
              component: HeFollow
            }
          ]
        },
        {
          path: '/personal',
          component: Personal,
          redirect: '/mycontribute',
          children: [
            {
              path: '/mycollection',
              component: MyCollection
            },{
              path: '/mycontribute',
              component: MyContribute
            },{
              path: '/myfollow',
              component: MyFollow
            },{
              path: '/myinformation',
              component: MyInformation
            },
          ]
        },
        {
          path: "/bbs",
          component:  Bbs,
          redirect: '/forum',
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
              path: "/music-score",
              component: MusicScore
            },
            {
              path: "/forum",
              component: Forum
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
  if(to.path === "/mycollection"){
    isLogin ? next() : next('/login');
  }else{
    next();
  }
});

export default router;

