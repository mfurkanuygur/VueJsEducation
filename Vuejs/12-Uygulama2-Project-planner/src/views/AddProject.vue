<template>
  <form @submit.prevent="handleSubmit">
    <h2>Project Form</h2>
    <label for="title">Title</label>
    <input type="text" id="title" v-model="title" required />
    <label for="detail">Detail</label>
    <textarea id="detail" v-model="detail"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      detail: "",
      url: "http://localhost:3000/projects",
    };
  },
  methods: {
    handleSubmit() {
      let newProject = {
        // id: self.crypto.randomUUID(),
        title: this.title,
        detail: this.detail,
        complete: false,
      };
      fetch(this.url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newProject),
      })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
form {
  box-shadow: 0px 10px 20px gray;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 20px 15px;
  margin: 50px;
}
h2 {
  text-align: center;
}
label {
  margin-top: 20px;
}
input {
  margin-top: 5px;
  padding: 5px 10px;
  border: none;
  border-bottom: 2px solid darkgray;
  outline: none;
}
textarea {
  margin-top: 5px;
  padding: 5px 10px;
  border: 2px solid darkgray;
  outline: none;
  display: inline-block;
}
input:focus,
textarea:focus {
  border-color: black;
}
button {
  width: 50%;
  padding: 5px;
  margin: 20px auto;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  border: 2px solid darkgrey;
  border-radius: 10px;
  transition: 0.3s ease;
  cursor: pointer;
}
button:hover {
  background-color: gray;
  color: white;
}
</style>
