import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/index/index'
import AddCoin from '@/views/index/addCoin'
import DahuDetail from '@/views/index/dahuDetail'
const routes = [
  {
    path:'/', component: Home
  },
  {
    path:'/addCoin', component: AddCoin
  },
  {
    path:'/dahuDetail', component: DahuDetail
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router