import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/img/:id?',
            name: 'upload',
            component: () => import(/* webpackChunkName: "upload" */ './views/UploadDocument.vue')
        },
        {
            path: '/:id.raw',
            name: 'raw',
            beforeEnter: (to) => {
                window.location = `${to.params.id}.raw`
            }
        },
        {
            path: '/:id?',
            name: 'main',
            component: () => import(/* webpackChunkName: "document" */ './views/Document.vue')
        }
    ]
})
