<template>
  <div>
    <span><strong>The Quiz</strong></span>
    <span>Counter: {{ currentQuestion + 1 }}/10</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    currentQuestion () {
      return this.$store.state.quiz.currentQuestion
    },
  },
}
</script>

<style>

</style>
