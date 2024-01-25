<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue Framework this is a main title",
    };
  },
};
</script>

<style scoped>
h3 {
  color: blue;
}
div {
  background-color: darkgray;
  padding: 15px 20px;
}
</style>
