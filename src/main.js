import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import './assets/style/main.css'

const app = createApp(App)

// 全局依赖 url
const mdURL = ref('http://ironcentury.cc/externalLinksController/chain/http%E6%A8%A1%E5%9D%97.md?ckey=%2FU5oOZ9P1WF5vEzdFm2FbIT6wBlzCYbX31sSvggx%2Bezb%2BsZjnZhSPd%2FMcl7ksPfN')

app.provide('mdURL', mdURL)
app.provide('showBackground', ref(false))
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)


app.mount('#app')
