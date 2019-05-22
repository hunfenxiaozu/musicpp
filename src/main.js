import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import normalize from './assets/normalize.css'
import axios from './http'
import Qs from 'qs'
import Aplayer from 'vue-aplayer'

Vue.config.productionTip = false;
Vue.use(elementUi);
Vue.use(normalize);
Vue.use(Aplayer);
Vue.prototype.$axios = axios;
Vue.prototype.$Qs = Qs;


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
