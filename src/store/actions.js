export default {
  previousQuestion: function (context) {
    context.commit('previousQuestion')
  },
  nextQuestion: function (context) {
    context.commit('nextQuestion')
  },
}
