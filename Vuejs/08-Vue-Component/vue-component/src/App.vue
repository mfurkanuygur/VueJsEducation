<template>
  <div>
    <Title :titleText="myText" />
    <Subtitle :subText="mySubtext" />
    <h3>Main title in app.vue</h3>
    <div>
      <input type="text" ref="inputText">
      <CleanButton @clean="cleanInput"/>
    </div>

    <Binding/>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Subtitle from "./components/Subtitle.vue";
import CleanButton from "./components/CleanButton.vue";
import Binding from "./components/Binding.vue";
export default {
  name: "App",
  components: {
    Title,
    Subtitle,
    CleanButton,
    Binding
  },
  data() {
    return {
      myText: "The title from Title Component",
      mySubtext:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam atque repellat, harum sapiente rem minima itaque eveniet expedita deseruntnesciunt, consectetur, velit nulla quae iusto! Esse minus corrupti expedita temporibus?",
    };
  },
  methods:{
    cleanInput(){
      this.$refs.inputText.value=""
    }
  }
};
</script>

<style>
body {
  background-color: lightgray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px 30px;
}
</style>
