import Vue from 'vue'
import router from "./router"
import store from './store'
import App from './App.vue'
import * as filters from "./filters"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
