import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {resolveOnChange} from "ant-design-vue/lib/input/Input";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: resolve=>{
        require(['../views/login/login.vue'],resolve)
      }
    }
  ]
})
