import { createWebHistory, createRouter } from 'vue-router'

// home, regions, cities, students, teachers
import Home from '../views/Home.vue'
import Regions from '../views/Regions.vue'
import Cities from '../views/Cities.vue'
import Students from '../views/Students.vue'
import Teachers from '../views/Teachers.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/regions', component: Regions },
    { path: '/cities', component: Cities },
    { path: '/students', component: Students },
    { path: '/teachers', component: Teachers }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

