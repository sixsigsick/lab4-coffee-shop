import { createRouter, createWebHistory } from 'vue-router'

// Import Components
import CoffeeIndex from '../components/Coffees/Index.vue'
import CoffeeCreate from '../components/Coffees/CreateCoffee.vue'
import CoffeeEdit from '../components/Coffees/EditCoffee.vue'
import ShowCoffee from '../components/Coffees/ShowCoffee.vue'
// import CoffeeShow from '@/components/Coffees/ShowCoffee.vue' (ถ้ามี)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/coffees',
      name: 'coffees',
      component: CoffeeIndex
    },
    {
      path: '/coffee/create',
      name: 'coffee-create',
      component: CoffeeCreate
    },
    {
      path: '/coffee/edit/:coffeeId',
      name: 'coffee-edit',
      component: CoffeeEdit
    },
    {
  path: '/coffee/:coffeeId', // ต้องใช้ชื่อ param ว่า coffeeId ให้ตรงกับใน created()
  name: 'coffee-show',
  component: ShowCoffee
}
  ]
})

export default router