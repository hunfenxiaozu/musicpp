import Vue from 'vue'
import App from '@/App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
<<<<<<< HEAD
=======

>>>>>>> 4a73fb79801d1844c3adc6beb7e8e926830c0fb6
import normalize from './assets/normalize.css'


Vue.config.productionTip = false;
Vue.use(elementUi);
Vue.use(normalize);
<<<<<<< HEAD
=======

>>>>>>> 4a73fb79801d1844c3adc6beb7e8e926830c0fb6

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
