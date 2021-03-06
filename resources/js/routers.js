let PostIndexComponent = () => import(/*webpackChunkName: "post-index"*/'./components/Posts/PostIndexComponent.vue');
let PostCreateComponent = () => import(/*webpackChunkName: "post-create"*/'./components/Posts/PostCreateComponent.vue');
let PostShowComponent = () => import(/*webpackChunkName: "post-show"*/'./components/Posts/PostShowComponent.vue');
let PostEditComponent = () => import(/*webpackChunkName: "post-edit"*/'./components/Posts/PostEditComponent.vue');

export default {
    mode: 'history',

    routes: [
        {
            path: '/post',
            component: PostIndexComponent,
            name: 'PostIndexComponent',
            props: true
        },


        {
            path: '/post/create',
            component: PostCreateComponent,
            name: 'PostCreateComponent',
            props: true
        },

        {
            path: '/post/:post',
            component: PostShowComponent,
            name: 'PostShowComponent',
            props: true
        },

        {
            path: '/post/:post/edit',
            component: PostEditComponent,
            name: 'PostEditComponent',
            props: true
        },

    ]
};


