import Vue from 'vue'
import App from '@/App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import normalize from './assets/normalize.css'


Vue.config.productionTip = false;
Vue.use(elementUi);
Vue.use(normalize);


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
