

const LoginRoutes = [
    {
        path: '/login',
        name: '',
        component: ()=> import('../view/LoginView.vue'),
        children: [
            {
                path: '',
                name: 'login',
                component: ()=> import('../layout/LoginLayout.vue')
            },
            {
                path: 'recuperar',
                name: 'recuperar-clave',
                component: ()=> import('../layout/RecuperarClave.vue')
            }
        ]
    },
    {
        path: '/register',
        name: '',
        component: ()=> import('../view/LoginView.vue'),
        children: [
            {
                path: '/register',
                name: 'register',
                component: ()=> import('../layout/RegisterLayout.vue')
            }
        ] 
    },
]


export default LoginRoutes;