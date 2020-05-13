import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Todo from '@/pages/Todo'
import Quiz from '@/pages/Quiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/list',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
    },
  ],
})
