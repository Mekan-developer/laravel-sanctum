import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/get", name: "get.index",
        component: () => import("./components/Get.vue"),
    },
    {
        path: "/user/login", name: "user.login",
        component: () => import("./components/auth/LoginComponent.vue"),
    },
    {
        path: "/user/register", name: "user.register",
        component: () => import("./components/auth/RegistrationComponent.vue"),
    },
    {
        path: "/user/personal", name: "user.personal",
        component: () => import("./components/auth/PersonalComponent.vue"),
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to,from,next) =>{
    const access_token = localStorage.getItem('access_token')
    if(to.name === 'user.personal')
        return next()
    if(!access_token)
        if(to.name === 'user.login' || to.name === 'user.register')
            return next()
        else
            return next({name:'user.login'})           
    else if(to.name === 'user.login' || to.name === 'user.register'){
        return next({
            name:'get.index'
        })
    }
    next()
})

export default router;