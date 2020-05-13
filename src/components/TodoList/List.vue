<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.content }}</li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['items'],
  data: function () {
    return {
      editedContent: '',
    }
  },
}
</script>

<style>
</style>
