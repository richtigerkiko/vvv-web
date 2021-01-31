import Amplify from 'aws-amplify'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import awsConfig from './aws-exports'
require('@ui5/webcomponents/dist/DurationPicker')

require('@/assets/scss/index.scss')

const app = createApp(App)
app.config.isCustomElement = tag => tag.startsWith('ui5-')

app.use(router).mount('#app')

Amplify.configure(awsConfig)
