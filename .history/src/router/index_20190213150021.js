import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/Video/Movie'
import Register from '@/components/User/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/movie/:id',
      name: 'Oglądasz Film',
      component: Movie
    },
    {
      path: '/register',
      name: 'Zarejestruj się',
      component: Register
    }
  ]
})
