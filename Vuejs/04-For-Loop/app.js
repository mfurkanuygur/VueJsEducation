
//  For döngüsü için "v-for" diyerek "değişken_ismi in dizi_ismi" yazılarak ilgili verilere ulaşılabilir.

const app = Vue.createApp({
    template: `
       <ul>
        <li v-for="day in dayOfTheWeek">{{day}}</li>
       </ul>
       <ul>
            <li v-for="person in persons">Person: {{person.name}} / Salary: {{person.salary}} </li>
       </ul>
        `,
    data() {
        return {
            dayOfTheWeek: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            persons: [
                { name: "Furkan", salary: "1" },
                { name: "Uygur", salary: "2" },
                { name: "Ayla", salary: "3" }
            ]
        }
    },
    methods: {

    }
})

app.mount("#myApp")