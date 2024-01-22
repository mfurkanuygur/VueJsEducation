
//template, data, methods kavramları

const app = Vue.createApp({
    template: `
        <h2>{{baslık}}</h2>
        <h3>{{icerik}}</h3>
        <p>Yorum sayısı: {{yorum}}</p>
        <span>{{yazi}}</span>
        <div>
            <button v-on:click="sil()"> Sil</button>
            <button v-on:click="ekle()">Ekle</button>
            <button v-on:click="reset()">Sıfırla</button>
        </div>
        `,
    data() {
        return {
            baslık: "Ana başlık",
            icerik: "Ders konuları",
            yorum: 0,
            yazi: "Yorum eklemek için tıklayın."
        }
    },
    methods: {
        ekle() {
            this.yorum++
            this.yazi = `${this.yorum} kez tıklandı`
        },
        sil() {
            if (this.yorum > 0) {
                this.yorum--
                this.yazi = `${this.yorum} kez tıklandı`
            }
            if (this.yorum == 0) {
                this.yazi = "Yorum eklemek için tıklayın."
            }
        },
        reset() {
            this.yorum = 0
            this.yazi = "Yorum eklemek için tıklayın."
        }
    }
})

app.mount("#myApp")