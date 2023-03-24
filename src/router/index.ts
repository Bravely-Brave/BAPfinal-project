import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import TabsPageCom from '../views/TabsPageCom.vue';
import StartPage from '../views/StartPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/startPage/start1'
  },
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/',
    redirect: '/tabsCom/Com1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/Tab1Page'
      },
      {
        path: 'TabInit',
        component: () => import('@/views/TabInitPage.vue')
      },
      {
        path: 'Tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'Tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'Tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'Tab4',
        component: () => import('@/views/Tab4Page.vue')
      },
      {
        path: 'Tab5',
        component: () => import('@/views/Tab5Page.vue')
      },
    ]
  },
  {
    path: '/StartPage/',
    component: StartPage,
    children: [
      {
        path: '',
        redirect: '/startPage/start1'
      },
      {
        path: 'start1',
        component: () => import('@/views/Start1Page.vue')
      },
    ]
  },
  {
    path: '/TabsPageCom/',
    component: TabsPageCom,
    children: [
      {
        path: '',
        redirect: '/tabsCom/Com1'
      },
      {
        path: 'ComInit',
        component: () => import('@/views/ComInitPage.vue')
      },
      {
        path: 'Com1',
        component: () => import('@/views/Com1Page.vue')
      },
      {
        path: 'Com2',
        component: () => import('@/views/Com2Page.vue')
      },
      {
        path: 'Com3',
        component: () => import('@/views/Com3Page.vue')
      },
      {
        path: 'Com4',
        component: () => import('@/views/Com4Page.vue')
      },
      {
        path: 'Com5',
        component: () => import('@/views/Com5Page.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
