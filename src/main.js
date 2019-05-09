import Vue from 'vue'
import App from '@/App'
import router from './router'
import elementUi from 'element-ui'
<<<<<<< HEAD
import 'element-ui/lib/theme-chalk/index.css'
=======
import 'element-ui/lib/theme-chalk/index.css';

>>>>>>> d22104270c14a274ef757eb1bda7dd78253b31de
import normalize from './assets/normalize.css'
import axios from 'axios'
import Qs from 'qs'


Vue.config.productionTip = false;
Vue.use(elementUi);
Vue.use(normalize);
<<<<<<< HEAD
Vue.prototype.$axios = axios;
Vue.prototype.$Qs = Qs;
=======

>>>>>>> d22104270c14a274ef757eb1bda7dd78253b31de

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
