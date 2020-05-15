<template>
  <div class="quiz">
    <section class="quiz__question">
      {{ question.question }}
    </section>

    <section class="answers">
      <button
        class="answers__item"
        :class="answerStyles(index)"
        type="button"
        v-for="(answer, index) in answers"
        :key="answer"
        @click="selectAnswer(index)"
      >
        {{ answer }}
      </button>
    </section>

    <section class="quiz__buttons">
      <button class="quiz__control -secondary" href="#" @click="previousQuestion">
        Back
      </button>
      <button class="quiz__control -primary" href="#" @click="checkAnswer">
        Submit
      </button>
      <button class="quiz__control -secondary" href="#" @click="nextQuestion">
        Next
      </button>
    </section>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import findIndex from 'lodash/findIndex'
import { mapActions } from 'vuex'

export default {
  name: 'QuestionBox',
  data: function () {
    return {
      answers: [],
      validAnswerIndex: null,
      checkPerformed: false,
      selected: null,
    }
  },
  computed: {
    question () {
      return this.$store.state.quiz.questions[this.$store.state.quiz.currentQuestion]
    },
  },
  methods: {
    ...mapActions([
      'nextQuestion',
      'previousQuestion',
    ]),
    answerStyles: function (index) {
      return {
        '-selected': !this.checkPerformed && index === this.selected,
        '-wrong': this.checkPerformed && index === this.selected && index !== this.validAnswerIndex,
        '-good': this.checkPerformed && index === this.validAnswerIndex,
      }
    },
    selectAnswer: function (index) {
      if (!this.checkPerformed) {
        this.selected = index
      }
    },
    checkAnswer: function (event) {
      this.checkPerformed = true
    },
    prepareQuestions: function () {
      this.selected = null
      this.checkPerformed = false
      this.answers = shuffle([
        ...this.question.incorrect_answers,
        this.question.correct_answer,
      ])
      this.validAnswerIndex = findIndex(this.answers, (x) => x === this.question.correct_answer)
    },
  },
  watch: {
    question: {
      immediate: true,
      handler: function () {
        this.prepareQuestions()
      },
    },
  },
}
</script>

<style lang="sass">
.quiz
  display: flex
  flex-flow: column nowrap
  width: 50%
  margin: 0 auto
  background-color: lightgray
  padding: 20px
  border-radius: 5px

  &__question
    font-size: 30px
    border-bottom: solid gray 1px
    margin-bottom: 20px
    min-height: 150px

  &__buttons
    margin-top: 10px

  &__control
    font-size: 18px
    background: white
    border: none
    border-radius: 3px

    &.-primary
      background-color: lightgreen

    &.-secondary
      background-color: lightblue

.answers
  display: flex
  flex-flow: column nowrap

  &__item
    margin: 5px 0
    font-size: 18px
    background: white
    border-radius: 3px

    &.-selected
      background-color: lightblue

    &.-good
      background-color: lightgreen

    &.-wrong
      background-color: red

</style>
