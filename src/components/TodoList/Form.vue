<template>
  <form @submit="handleSubmit">
    <input type="text" :value="value" @input="handleChange" />
    <input type="submit" />
  </form>
</template>

<script>
export default {
  name: 'todo-form',
  props: ['handleSubmit', 'value'],
  methods: {
    handleChange: function (event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style>
</style>
