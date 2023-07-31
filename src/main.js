import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App);

app.use(VueScrollTo, {
  // Add options here (if needed)
});

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');