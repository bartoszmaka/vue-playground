<template>
  <nav id="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/list">Todo List</router-link>
    <router-link to="/quiz">Quiz</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
#navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  margin: 0 20px;
}
</style>
