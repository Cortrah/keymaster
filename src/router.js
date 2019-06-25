import Vue from 'vue';
import Router from 'vue-router';

import EditOwner from './components/EditOwner';
import OwnerList from './components/OwnerList';

Vue.use(Router);

export default new Router({
    base: '/owner-service/admin/dashboard',
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'OwnerList',
            component: OwnerList,
            meta: {
                title: 'Owner List'
            },
        },
        {
            path: '/owner/:id',
            name: 'EditOwner',
            component: EditOwner,
            props: (route) => (
                {ownerId: route.params.id}
            ),
            meta: {
                title: 'Edit Owner'
            },
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});