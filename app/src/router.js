import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import C from './views/C.vue'
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import Error from './views/Error.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',  //如果是'hash‘模式则会有#
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/a',
      component:A,
      children:[
        {
          path:"/a/test1",
          component:Test1
        },
        {
          path:"/a/test2",
          component:Test2
        }
      ]
    },
    {
      path:'/b',
      name:'b',
      component:B
    },
    {
      path:'/b/:id',
      // name:'b',
      // component:B
      //重定向到C,C是一个含有参数的页面就需要把参数带上
      redirect:'/c/:id'
    },
    {
      path:'/c/:id',
      component:C
    },
    {
      path:'/home',
      redirect:'/'
    },
    {
      path: '/',
      component: Home,
      alias:'/xxx'
    },
    {
      path:'*',
      component: Error,
      beforeEnter:(to,from,next) => {
        // 路由的钩子函数
        console.log(to,from,next);
        next();
      }
    }
  ]
})