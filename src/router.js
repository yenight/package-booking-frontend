import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PackageStation from './components/PackageStation'
import Reservation from './components/Reservation'
import ParcelStorage from './components/ParcelStorage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/package-station', name: 'package-station', component: PackageStation },
        { path: '/parcel-storage', name: 'parcel-storage', component: ParcelStorage },
        { path: '/reservation', name: 'reservation', component: Reservation }
      ]
    }
  ]
})
