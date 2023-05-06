

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
           }
        ],
        beforeEnter: (to, from) => {
            console.log('beforeEnter')
            return true
          },
    },
]


export default AppRoutes;