import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/HomePage.vue'
import About from '../components/views/AboutPage.vue'
import Example from '../components/views/ExamplePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home   
    },
    {
        path: '/about',
        name: 'About',
        component: About  
    },
    {
        path: '/example',
        name: 'Example',
        component: Example
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router