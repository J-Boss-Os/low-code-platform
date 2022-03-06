import { createApp } from 'vue'
import App from './App.vue'
import lowCodeCore from '@low-code/core'
import lowCodePlatform from '@low-code/platform'
import '@low-code/platform/assets/style/style.scss'
createApp(App).use(lowCodeCore).use(lowCodePlatform).mount('#app')
