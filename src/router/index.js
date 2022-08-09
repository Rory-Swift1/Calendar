import {createRouter,createWebHashHistory} from 'vue-router'
import Today from '../pages/Today/Today.vue'
import Recent from '../pages/Recent/Recent.vue'
import Year from '../pages/Year/Year.vue'


const routes=[
    {
        path:'/today',
        name:'Today',
        component:Today,
    },
    {
        path:'/recent',
        name:'Recent',
        component:Recent,
    },
    {
        path:'/year',
        name:'Year',
        component:Year,
    },
    {
        //默认路由
        path:'/',
        redirect:'/today'
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router