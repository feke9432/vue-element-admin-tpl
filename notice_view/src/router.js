import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { getToken } from './plugins/cookie'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true
      },
      redirect: '/home/noticelist',
      children: [
        {
          path: 'noticelist',
          name: 'notice_list',
          component: () => import('./components/noticeList.vue')
        }, {
          path: 'iplist',
          name: 'ip_list',
          component: () => import('./components/ipList.vue')
        }, {
          path: 'todolist',
          name: 'todo_list',
          component: () => import('./components/TodoList.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
    if (getToken() === 'success') {
      next();
    } else {
      if (to.path == '/login') { //如果是登录页面路径，就直接next()
        next();
      } else { //不然就跳转到登录；
        next('/login');
      }
    }
})

export default router;
