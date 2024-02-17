<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="openDetail">{{ project.title }}</h3>
      <div class="icons">
        <!-- <router-link :to="{ path: `/projects/${project.id}` }"> -->
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-symbols-outlined">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-symbols-outlined"
          >delete</span
        >
        <span @click="completeProject" class="material-symbols-outlined tick"
          >done</span
        >
      </div>
    </div>
    <div v-if="showDetail">
      <p>{{ project.detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
      url: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    openDetail() {
      this.showDetail = !this.showDetail;
    },
    deleteProject() {
      fetch(this.url, { method: "DELETE" })
        .then(this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    completeProject() {
      fetch(this.url, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(this.$emit("complete", this.project.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.material-symbols-outlined {
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  color: #bbb;
}
.material-symbols-outlined:hover {
  color: #555;
}
.project {
  border: 1px solid gray;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  border-left: 10px solid red;
}
.project.complete {
  border-left: 10px solid green;
}
.project.complete .tick {
  color: green;
}
h3 {
  cursor: pointer;
}
.detail-link {
  text-align: end;
  font-size: 13px;
}
.detail-link > a {
  text-decoration: none;
  border: 1px solid gray;
  color: black;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;
}
.detail-link > a:hover {
  background-color: gray;
}
</style>
