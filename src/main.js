import Vue from 'vue'
import App from '@/App'

import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview'
import normalize from './assets/normalize.css'


Vue.config.productionTip = false
Vue.use(elementUi);
Vue.use(normalize);
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
