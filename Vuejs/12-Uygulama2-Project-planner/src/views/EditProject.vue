<template>
  <form @submit.prevent="handleSubmit">
    <h2>Edit Project</h2>
    <label for="title">New Title</label>
    <input type="text" id="title" v-model="title" required />
    <label for="detail">New Detail</label>
    <textarea id="detail" v-model="detail" rows="4" cols="50"></textarea>
    <button>Save Changes</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      detail: "",
      url: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        (this.title = data.title), (this.detail = data.detail);
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleSubmit() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: this.title, detail: this.detail }),
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
input,
textarea {
  margin-top: 5px;
  padding: 5px 10px;
  border: 2px solid darkgray;
  border-radius: 10px;
  outline: none;
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
