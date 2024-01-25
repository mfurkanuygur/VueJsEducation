<template>
  <div>
    <Title />
    <Subtitle />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Subtitle from "./components/Subtitle.vue";
export default {
  name: "App",
  components: {
    Title,
    Subtitle,
  },
};
</script>

<style>
body {
  background-color: lightgray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px 30px;

}
</style>
