<template>
  <div id="quiz">
    <Header :index="questionIndex" />
      <QuestionBox
        v-if="questions.length"
        :question="questions[questionIndex]"
        :next="next"
        :back="back"
        />
      <div v-else>Fetching questions...</div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Quiz/Header'
import QuestionBox from '@/components/Quiz/QuestionBox'

export default {
  name: 'Quiz',
  components: {
    Header,
    QuestionBox,
  },
  data: function () {
    return {
      questions: [],
      questionIndex: 0,
    }
  },
  methods: {
    back: function () {
      if (this.questionIndex > 0) {
        this.questionIndex--
      }
    },
    next: function () {
      if (this.questionIndex < 9) {
        this.questionIndex++
      }
    },
  },
  mounted: function () {
    axios.get('https://opentdb.com/api.php', {
      params: {
        amount: 10,
        category: 27,
        type: 'multiple',
      },
    }).then((response) => {
      this.questions = response.data.results
    })
  },
}
</script>

<style>

</style>
