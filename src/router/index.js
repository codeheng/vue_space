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
        path: '/userlist',
        name: 'userlist',
        component: UserList
    },
    {
        path: '/userprofile',
        name: 'userprofile',
        component: UserProfile
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/404',
        name: '404',
        component: NotFoundView
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router