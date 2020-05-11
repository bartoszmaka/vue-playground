<template>
  <div id="foo">
    <form @submit="handleSubmit">
      <input type="text" v-model="editedContent" />
      <input type="submit" />
    </form>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  methods: {
    handleSubmit: function (event) {
      event.preventDefault()
      const newItem = {
        id: Date.now(),
        content: this.editedContent
      }

      this.items.push(newItem)
      this.editedContent = ''
    }
  },
  data: function () {
    return {
      editedContent: '',
      items: [
        {
          id: '1',
          content: 'buy milk'
        },
        {
          id: '2',
          content: 'buy sausage'
        }
      ]
    }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
