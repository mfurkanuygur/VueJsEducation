<script >
export default{
  props:["msg"]
}
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with

    </h3>
  </div>
</template>

<style scoped>
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
