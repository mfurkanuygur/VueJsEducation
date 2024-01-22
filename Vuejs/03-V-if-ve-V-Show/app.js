
// V-if ve V-Show aralarındaki fark şu
// V-Show dom'a yazılıp display:none olurken; V-if dom'a yazılmıyor

//V-if kullanımını yaptıktan sonra v-else diyerek diğer koşulu yazabiliriz

//v-on:click yerine @click diyebiliriz

const app = Vue.createApp({
    template: `
        <div v-if="showInfo">Deneme1 gösterildi</div>
        <div v-show="!showInfo">Deneme1 gizlendi</div>

        <button @click="changeInfo()">
            <span v-if="!showInfo"> Show</span>    
            <span v-else> Hide</span>
        </button>
        `,
    data() {
        return {
            showInfo: true,
        }
    },
    methods: {
        changeInfo() {
            this.showInfo = !this.showInfo
        }
    }
})

app.mount("#myApp")