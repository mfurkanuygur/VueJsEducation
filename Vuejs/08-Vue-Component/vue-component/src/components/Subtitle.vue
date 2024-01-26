<template>
  <div>
    <p>
      {{ subText }}
    </p>
    <SubButton />
  </div>
</template>

<script>
import SubButton from "./SubButton.vue";
export default {
  props: ["subText"],
  components:{
    SubButton
  }
};
</script>

<style scoped>
p {
  text-align: justify;
  text-indent: 1em;
  font-weight: 600;
}
</style>
