import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
// import testPlugin from './test.plugin'

library.add(fas)

// createApp(App).use(testPlugin).mount('#app')
createApp(App).mount('#app')
