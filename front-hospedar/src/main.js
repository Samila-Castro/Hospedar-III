import { createApp } from 'vue'
import App from './App.vue'
import './global.css';
// // Only import what you need!






import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';



import router from "./router";
const app = createApp(App);
app.use(ElementPlus)
app.use(router);
app.mount("#app");