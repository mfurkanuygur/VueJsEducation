
//template, data, methods kavramları

const app = Vue.createApp({
    template: `
        <h2>{{baslık}}</h2>
        <h3>{{icerik}}</h3>
        <p>Yorum sayısı: {{yorum}}</p>
        <span>{{yazi}}</span>
        <button v-on:click="ekle()">ekle</button>`,
    data() {
        return {
            baslık: "Ana başlık",
            icerik: "Ders konuları",
            yorum: 0,
            yazi:"yorum eklemek için tıklayın."
        }
    },
    methods: {
        ekle() {
            this.yorum++
            this.yazi=`${this.yorum} kez tıklandı`
        }
    }
})

app.mount("#myApp")