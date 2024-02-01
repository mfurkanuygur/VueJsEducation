<template>
  <form  @submit.prevent="sendData">
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
    <select v-model="framework">
      <option value="React">React</option>
      <option value="Vue">Vue</option>
      <option value="Angular">Angular</option>
    </select>
    <p>{{ framework }}</p>
    <hr />
    <input type="checkbox" id="checkbox1" v-model="checked" />
    <label for="checkbox1">Onay</label>
    <p>Sonuç:{{ checked ? "Onaylandı" : "Lütfen onaylayınız" }}</p>
    <hr />
    <div>
      <input type="checkbox" id="React" value="React" v-model="frameworks" />
      <label for="React">React</label>
      <input type="checkbox" id="Vue" value="Vue" v-model="frameworks" />
      <label for="Vue">Vue</label>
      <input
        type="checkbox"
        id="Angular"
        value="Angular"
        v-model="frameworks"
      />
      <label for="Angular">Angular</label>
    </div>
    <p>Seçilen frameworkler{{ frameworks }}</p>
    <hr />
    <div>
      <input type="text" @keyup.alt="addStudent" v-model="student" />
      <div v-for="student in students" :key="student">
        <span @click="deleteStudent(student)">{{ student }}</span>
      </div>
    </div>
    <hr>
    <button>Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "başlangıç metni",
      framework: "Bir framework seçiniz",
      checked: false,
      frameworks: [],
      student: "",
      students: [],
    };
  },
  methods: {
    addStudent(e) {
      if (e.key == "," && this.student) {
        if (!this.students.includes(this.student)) {
          this.students.push(this.student);
        }
        this.student = "";
      }
    },
    deleteStudent(student) {
      this.students = this.students.filter((item) => item !== student);
    },
    sendData(){
      console.log(this.text,this.framework,this.checked,this.frameworks,this.students)
    }
  },
};
</script>

<style></style>
