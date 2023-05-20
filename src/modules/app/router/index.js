import EstadisticasSubRoutes from './estadisticas/index'

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
           },
           {
            path: 'estadisticas',
            name: 'app-estadisticas',
            component: ()=> import('../layout/EstadisticasLayout.vue'),
            children: EstadisticasSubRoutes,
           },
           {
            path: 'inventario',
            name: 'app-inventario',
           },
           {
            path: 'trabajadores',
            name: 'app-trabajadores',
           }
        ],
        beforeEnter: (to, from) => {
            console.log('beforeEnter')
            return true
          },
    },
]


export default AppRoutes;