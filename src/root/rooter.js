import Vue from 'vue';
import vueRouter from 'vue-router'
import login from '../components/login.vue'
import register from '../components/logindetail/register.vue'
import chat from '../components/chat.vue'
let router = new vueRouter({
    mode: "history",
    routes: [
        {
            path:'/',
            name:'login',            
            component:login,
            children:[
                
            ]
        },
        {
            path:'/register',
            name:'register',
            component:register
        },
        {
            path:'/chat',
            name:'chat',
            component:chat
        }
    ]
});
Vue.use(vueRouter);
export default router;