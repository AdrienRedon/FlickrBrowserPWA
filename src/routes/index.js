import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Picture from '@/pages/Picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/picture/:id',
      name: 'Picture',
      component: Picture
    }
  ]
})
