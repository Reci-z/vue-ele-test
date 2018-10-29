import Vue from 'vue';
import Alert from './package/alert/index';
import App from './components/main.vue';

Vue.use(Alert);

new Vue({
    el:"#app",
    render:h=>h(App)
})
