<template>
  <div>
    <h1>Students</h1>
    <ul v-for="student in students" :key="student.id">
      <li>{{ student.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "Furkan", score: "75" },
        { id: 2, name: "Uygur", score: "55" },
        { id: 3, name: "Ayla", score: "65" },
      ],
    };
  },
};
</script>

<style></style>
