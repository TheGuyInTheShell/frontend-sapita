const ReportesSubRoutes = [
    {
     path: '',
     name: 'reportes-display',
     component: ()=> import('../../layout/reportes/ReportesDisplay.vue')
    },
    {
     path: 'aggregar',
     name: 'reportes-agg',
     component: ()=> import('../../layout/reportes/AddReporte.vue')
    },
 ]



export default ReportesSubRoutes;