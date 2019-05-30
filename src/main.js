import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import normalize from './assets/normalize.css'
import axios from './http'
import Qs from 'qs'
<<<<<<< HEAD

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')


=======
>>>>>>> 31de30ad7f1e48dc4a1104291e919fb2fe896050
import Aplayer from 'vue-aplayer'

Vue.config.productionTip = false;
Vue.use(elementUi);
Vue.use(normalize);
Vue.use(Aplayer);
Vue.prototype.$axios = axios;
Vue.prototype.$Qs = Qs;
Vue.use(VideoPlayer)


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
