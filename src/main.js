// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '!style-loader!css-loader!less-loader!./assets/less/commenLess.less'


const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.config.productionTip = false;

import { Search, Flexbox, FlexboxItem, Tabbar, TabbarItem } from 'vux'
Vue.component('Search', Search);
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
