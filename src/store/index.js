import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    previousQuestion (state) {
      if (state.quiz.currentQuestion > 0) {
        state.quiz.currentQuestion--
      }
    },
    nextQuestion (state) {
      if (state.quiz.currentQuestion < state.quiz.questions.length - 1) {
        state.quiz.currentQuestion++
      }
    },
    fetchQuestions (state, questions) {
      state.quiz.questions = questions
    },
  },
  actions: {
    previousQuestion (context) {
      context.commit('previousQuestion')
    },
    nextQuestion (context) {
      context.commit('nextQuestion')
    },
    async fetchQuestions (context) {
      const response = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: 10,
          category: 27,
          type: 'multiple',
        },
      })

      const questions = response.data.results
      context.commit('fetchQuestions', questions)
    },
  },
})
