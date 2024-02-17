<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Homepage</router-link>
    <router-link :to="{ name: 'AddProject' }">Add New Project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
}
nav a {
  margin: 0 20px;
  text-decoration: none;
  color: #bbb;
  padding-bottom: 5px;
}

a.router-link-active {
  border-bottom: 3px solid green;
  color: green;
}
</style>
