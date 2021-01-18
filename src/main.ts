import Amplify from 'aws-amplify'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import awsConfig from './aws-exports'

require('@/assets/scss/index.scss')
createApp(App).use(router).mount('#app')

Amplify.configure(awsConfig)
