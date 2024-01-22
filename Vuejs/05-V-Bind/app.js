
// V-bind kavramı ise herhangi bir özelliği ilgili yere bağlamk için kullanılır.
// "v-bind:"" diyerek ya da sadece "iki nokta" ile kullanılabilir.
const app = Vue.createApp({
    template: `
       <div :style="fontColor"> Deneme Yazısı </div>
       <div v-bind:style="fontColor"> Deneme Yazısı </div>
        `,
    data() {
        return {
         fontColor:"color:red"
        }
    },
    methods: {

    }
})

app.mount("#myApp")