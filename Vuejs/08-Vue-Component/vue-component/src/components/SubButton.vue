<template>
  <div>
    <button @click="tıkla">Tıklayınız</button>
    <p v-if="isClick">Tıklandı</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    tıkla() {
      return (this.isClick = !this.isClick);
    },
  },
};
</script>

<style scoped>
  button{
    padding: 10px 20px;
    background-color: gainsboro;
    border-radius: 10px;
    border: 1px solid red;
    color: blue;
    font-weight: 700;
    font-size: 17px;
  }
</style>
