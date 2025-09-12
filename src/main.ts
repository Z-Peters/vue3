// import './assets/main.css'
import { createApp } from 'vue'// 引入createApp用于创建应用
import App from './App.vue'// 引入根组件App.vue
// import { createPinia } from 'pinia'


// import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
