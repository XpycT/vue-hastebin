import Vue from 'vue'
import Router from 'vue-router'
import NewDocument from './views/NewDocument.vue'
import ViewDocument from './views/ViewDocument.vue'
import UploadDocument from './views/UploadDocument.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'new',
            component: NewDocument
        },
        {
            path: '/v/:hash',
            name: 'view',
            component: ViewDocument
        },
        {
            path: '/img',
            name: 'upload',
            component: UploadDocument
        },
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
