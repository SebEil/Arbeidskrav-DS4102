import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/homePage.vue'
import About from '../components/views/aboutPage.vue'
import Example from '../components/views/examplePage.vue'

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