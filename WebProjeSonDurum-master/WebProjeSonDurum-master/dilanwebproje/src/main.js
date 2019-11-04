import Vue from 'vue'

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

export const eventBus = new Vue();
export const eBus = new Vue();
export const eBus2 = new Vue();
export const eBus3 = new Vue();



Vue.use(BootstrapVue)


Vue.config.productionTip = false
new Vue ({
  
  render: h => h(App)
}).$mount('#app')

