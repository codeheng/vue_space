import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginView from '@/views/LoginView'
import NotFoundView from '@/views/NotFoundView'
import RegisterView from '@/views/RegisterView'
import UserProfile from '@/views/UserProfile'
import UserList from '@/views/UserList'


const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/userlist/',
        name: 'userlist',
        component: UserList
    },
    {
        // :userId表示参数,需要给参数才可以访问
        path: '/userprofile/:userId/',
        name: 'userprofile',
        component: UserProfile
    },
    {
        path: '/login/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register/',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/404/',
        name: '404',
        component: NotFoundView
    },
    // 正则表达式，让其跳转至404
    {
        path: '/:catchAll(.*)',
        redirect: "/404/",
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router