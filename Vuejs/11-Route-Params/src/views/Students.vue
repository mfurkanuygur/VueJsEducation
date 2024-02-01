<template>
  <div>
    <h3>Students</h3>
    <ul v-for="student in students" :key="student.id">
      <router-link :to="{ path: `/students/${student.id}` }">
        {{ student.name }}
      </router-link>
      <!-- <RouterLink :to="{ name: 'studentsInfo', params: { id: student.id } }">
        {{ student.name }}
      </RouterLink> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "Furkan", score: "60" },
        { id: 2, name: "Uygur", score: "40" },
        { id: 3, name: "Ayla", score: "50" },
      ],
    };
  },
};
</script>

<style></style>
