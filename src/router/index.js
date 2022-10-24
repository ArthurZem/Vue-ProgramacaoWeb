import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ClienteCrud from '../components/ClienteCrud'
import CardapioCrud from '../components/CardapioCrud'
import PedidoCrud from '../components/PedidoCrud'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    component: ClienteCrud
    
  },
  {
    path: '/cardapio',
    component: CardapioCrud
  },
  {
    path: '/pedido',
    component: PedidoCrud
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
