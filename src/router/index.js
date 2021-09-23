import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Converter from "../views/Converter.vue";

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/converter',
    name: 'Converter',
    component: Converter
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router