<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
body {
  box-sizing: border-box;
  background: #f2f2f2;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
}
</style>
