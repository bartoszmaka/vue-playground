<template>
  <div>
    <p>{{ id }}</p>
    <button type="button" @click="handleClick">Do a request</button>
    <pre>{{ prettyResponse }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Requests',
  data: () => ({
    response: null,
    id: 0,
  }),
  computed: {
    prettyResponse () {
      return JSON.stringify(this.response, null, 2)
    },
  },
  methods: {
    async handleClick () {
      this.id++
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${this.id}`)
      this.response = response.data
    },
  },
}
</script>

<style>

</style>
