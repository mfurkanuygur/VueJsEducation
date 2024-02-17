<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      All
    </button>
    <button
      @click="updateFilter('complete')"
      :class="{ active: current === 'complete' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('notComplete')"
      :class="{ active: current === 'notComplete' }"
    >
      Not Complete
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style scoped>

.filter-nav button {
  background-color: transparent;
  border: none;
  outline: none;
  color: #bbb;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
  letter-spacing: 1px;
}
.filter-nav button:active {
  color: black;
}
</style>
