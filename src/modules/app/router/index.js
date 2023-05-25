import EstadisticasSubRoutes from './estadisticas/index'
import InventarioSubRoutes from './inventario/index'
import RecordSubRoutes from './record/index'

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
            children: RecordSubRoutes,
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
            component: ()=> import('../layout/InventarioLayout.vue'),
            children: InventarioSubRoutes, 
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