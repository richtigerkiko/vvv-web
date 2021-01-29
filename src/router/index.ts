import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import BaseContent from '@/views/BaseContent.vue'
import Register from '@/components/auth/Register.vue'
import TrainingSettings from '@/components/training/TrainingSettings.vue'
import RoundWrapper from '@/components/training/RoundWrapper.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: BaseContent,
    children: [
      {
        path: '',
        name: 'login.register',
        component: Register
      }
    ]
  },
  {
    path: '/training',
    name: 'training',
    component: BaseContent,
    children: [
      {
        path: '',
        name: 'training.settings',
        component: TrainingSettings
      },
      {
        path: 'round',
        name: 'training.round',
        component: RoundWrapper
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
