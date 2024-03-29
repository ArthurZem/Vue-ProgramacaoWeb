import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ListaJogadores from '../components/ListaJogadores'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/players',
    component: ListaJogadores
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
