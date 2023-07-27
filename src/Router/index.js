import { createRouter,createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../Components/About.vue";
import Pays from "../Components/Pays.vue"

const routes = [
    {
        path:"/",
        component:Home,
        name:"home"
    },
    {
        path:"/pays/:name",
        component:Pays,
        name:"pays"
    },
    {
        path:"/about",
        component:About,
        name:"about"
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;