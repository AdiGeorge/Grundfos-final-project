import Vue from 'vue'
import App from './App.vue'
import Frontpage from './views/Frontpage'
import Components from './views/Components'
import Resources from './views/Resources'
import Guidelines from './views/Guidelines'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import Button1 from './components/Button1'
import Button2 from './components/Button2'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.use(VueRouter);

export const router = new VueRouter ({
  mode:'history',
  base: '/final-project',
  routes: [
    {path: '/', component: Frontpage, name:Frontpage},
    {path: '/components', component: Components, name:Components},
    {path: '/resources', component: Resources, name:Resources},
    {path: '/guidelines', component: Guidelines, name: Guidelines},
    {path: './button1', component: Button1},
    {path: './button2', component: Button2}
   
   
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
