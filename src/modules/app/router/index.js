

const AppRoutes = [
    {
        path: '/app',
        name: 'app-home',
        component: ()=> import('../view/AppView.vue'),
        children: [
           {
            path: '',
            name: 'app-home',
            component: ()=> import('../layout/PrincipalLayout.vue'),
           },
           {
            path: 'record',
            name: 'app-record',
            component: ()=> import('../layout/RecordLayout.vue'),
           }
        ],
        beforeEnter: (to, from) => {
            console.log('beforeEnter')
            return true
          },
    },
]


export default AppRoutes;