<template>
  <div id="foo">
    <TodoForm :handleSubmit="handleSubmit" :value="editedContent" v-model="editedContent"></TodoForm>
    <TodoList :items="items"></TodoList>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoList/Form.vue'
import TodoList from '@/components/TodoList/List.vue'

export default {
  name: 'Todo',
  components: {
    TodoForm,
    TodoList,
  },
  methods: {
    handleSubmit: function (event) {
      event.preventDefault()
      const newItem = {
        id: Date.now(),
        content: this.editedContent,
      }

      this.items.push(newItem)
      this.editedContent = ''
    },
  },
  data: function () {
    return {
      editedContent: '',
      items: [
        {
          id: '1',
          content: 'buy milk',
        },
        {
          id: '2',
          content: 'buy sausage',
        },
      ],
    }
  },
}
</script>
<style>
li {
  list-style-type: none;
}
</style>
