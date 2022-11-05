import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            patch:'/',
            component:HomePage
        },
        {
            patch: '/todos',
            component: () =>import('./views/Todos.vue')
        }
    ]
})