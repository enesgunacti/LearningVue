import { createApp } from 'vue'
import App from './App.vue'
import Greeting from './components/Greeting.vue'

const vm = createApp(App)
vm.component('Greeting',Greeting)
createApp(App).mount('#app')
