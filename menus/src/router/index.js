import { createRouter, createWebHistory } from 'vue-router'

// Import Components
import Login from '../components/Login.vue'
import MenuCreate from '../components/Menus/CreateMenu.vue'
import MenuEdit from '../components/Menus/EditMenu.vue'
import MenuIndex from '../components/Menus/Index.vue'
import MenuShow from '../components/Menus/ShowMenu.vue'

import OrderCreate from '../components/Orders/CreateOrder.vue'
import OrderEdit from '../components/Orders/EditOrder.vue'
import OrderIndex from '../components/Orders/Index.vue'
import OrderShow from '../components/Orders/ShowOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/login',
      name: 'login',
      component: Login
    },
    {

      path: '/menus',
      name: 'menus',
      component: MenuIndex
    },
    {
      path: '/menu/create',
      name: 'menu-create',
      component: MenuCreate
    },
    {
      path: '/menu/edit/:menuId',
      name: 'menu-edit',
      component: MenuEdit
    },
    {
      path: '/menu/:menuId',
      name: 'menu-show',
      component: MenuShow
    },



    {
      path: "/orders",
      name: "orders",
      component: OrderIndex
    },
    {
      path: "/order/create",
      name: "order-create",
      component: OrderCreate
    },
    {
      path: "/order/edit/:id",
      name: "order-edit",
      component: OrderEdit
    },
    {
      path: "/order/:id",
      name: "order-show",
      component: OrderShow
    },



    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
  ]
})

export default router