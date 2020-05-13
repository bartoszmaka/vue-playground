<template>
  <div>
    <span><strong>The Quiz</strong></span>
    <span>Counter: {{ index + 1 }}/10</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style>

</style>
