// import Alert from '../package/alert/index';

// const components = [
//     Alert
// ]

// const install = function(Vue,opt={}){
//      components.forEach(component => {
//          Vue.component(component.name, component);
//      });
// }


// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// }

// module.exports = {
//     Alert
// }


// module.exports.default = module.exports;

import Vue from 'vue';
import Alert from '../package/alert/index';
import App from '../components/main.vue';

Vue.use(Alert);

new Vue({
    el: "#app",
    render: h => h(App)
})
