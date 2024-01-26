<template>
  <div>
    <h3>{{ titleText }}</h3>
  </div>
</template>

<script>
export default {
  props:["titleText"],
 
};
</script>

<style scoped>
h3 {
  color: blue;
  font-style: italic;
  font-weight: 400;
}
div {
  background-color: darkgray;
  padding: 15px 20px;
}
</style>
