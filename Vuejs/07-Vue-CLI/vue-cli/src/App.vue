<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      <input type="text" ref="nameInput" />
      <br />
      <input type="text" ref="passwordInput" />
    </div>
    <button @click="login">Giriş</button>
    <p v-if="isLogin">Giriş Yapıldı</p>
    <p v-else>Giriş Başarısız</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Login",
      name: "furkan",
      password: "1234",
      isLogin: false,
    };
  },
  methods: {
    login() {
      return this.$refs.nameInput.value === this.name &&
        this.$refs.passwordInput.value === this.password
        ? (this.isLogin = true)
        : (this.isLogin = false);
    },
  },
};
</script>

<style>
body {
  background-color: darkgray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin-top: 60px;
}
</style>
