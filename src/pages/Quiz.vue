<template>
  <div id="quiz">
    <div v-if="questions.length">
      <Header />
      <QuestionBox />
    </div>
    <div v-else>Fetching questions...</div>
  </div>
</template>

<script>
import Header from '@/components/Quiz/Header'
import QuestionBox from '@/components/Quiz/QuestionBox'
import { mapActions } from 'vuex'

export default {
  name: 'Quiz',
  components: {
    Header,
    QuestionBox,
  },
  computed: {
    questions () {
      return this.$store.state.quiz.questions
    },
  },
  methods: {
    ...mapActions(['fetchQuestions']),
  },
  mounted: function () {
    this.fetchQuestions()
  },
}
</script>

<style>

</style>
