
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const app = createApp(App)

app.use(router)

app.mount('#app')
