require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
import routers from './routers';
Vue.use(VueRouter)
//Posts
Vue.component('post-index-component', require('./components/Posts/PostIndexComponent.vue').default);
Vue.component('post-create-component', require('./components/Posts/PostCreateComponent.vue').default);
Vue.component('post-show-component', require('./components/Posts/PostShowComponent.vue').default);
Vue.component('post-edit-component', require('./components/Posts/PostEditComponent.vue').default);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routers)
});
