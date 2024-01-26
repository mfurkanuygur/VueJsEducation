<template>
  <form>
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
    <select v-model="framework" >
        <option value="1">React</option>
        <option value="2">Vue</option>
        <option value="3">Angular</option>
    </select>
    <p>{{ framework }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "denemee",
      framework:"Bir framework seçiniz"
    };
  },
};
</script>

<style></style>
