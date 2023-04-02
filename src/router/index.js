import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../page/Welcome.vue';
import Login from '../page/Login.vue';
import MDShow from '../page/md.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: Welcome
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../page/Index.vue'),
      children: [
        {
          path: 'preview/video',
          component: () => import('@/components/main-components/VideoApp.vue')
        },
        {
          path: 'preview/image',
          component: () => import('@/components/main-components/ImageApp.vue')
        },
        {
          path: 'preview/file',
          component: () => import('@/components/main-components/FileApp.vue')
        },
        {
          path: 'manage/video',
          component: () => import('@/components/main-components/VideoApp.vue')
        },
        {
          path: 'manage/image',
          component: () => import('@/components/main-components/ImageApp.vue')
        },
        {
          path: 'manage/file',
          component: () => import('@/components/main-components/FileApp.vue')
        }
      ]
    },
    {
      path: '/md',
      name: 'MDShow',
      component: MDShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forgetPass',
      name: 'forgetPass',
      component: () => import('../page/ForgetPass.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../page/Register.vue')
    },
    {
      path: '/show-ver',
      name: 'verify',
      component: () => import('../components/VerifyCode.vue')
    }
  ]
})

export default router
