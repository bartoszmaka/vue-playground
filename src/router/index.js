import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Todo from '@/pages/Todo'
import Quiz from '@/pages/Quiz'
import Slots from '@/pages/Slots'
import TicTacToe from '@/pages/TicTacToe'

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
    {
      path: '/slots',
      name: 'Slots',
      component: Slots,
    },
    {
      path: '/games/tictactoe',
      name: 'TicTacToe',
      component: TicTacToe,
    },
  ],
})
