import Vue from 'vue'
import Router from 'vue-router'
import Document from './views/Document.vue'
import UploadDocument from './views/UploadDocument.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/img/:id?',
            name: 'upload',
            component: UploadDocument
        },
        {
            path: '/:id?',
            name: 'main',
            component: Document
        },
        {
            path: '**',
            redirect: '/'
        }

        /*{
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
        }*/
    ]
})
