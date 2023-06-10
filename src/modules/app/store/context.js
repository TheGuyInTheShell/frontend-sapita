import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useContextStore = defineStore('context', ()=>{

      const userType = ref('render_current') 

     const inputsForm = ref([])

     const fetchVerb = ref("")
     
     const fetchRoute = ref("")

     const trabajadores = ref([
         {
            id: 2,
            nombre: "Omarleen Perez"
         }  
     ])

     const recordOptionsSearch = ref([
      {
        name: 'order',
        text: 'orden',
        options: ['asc', 'desc']
      },
      {
          name: 'by',
          text: 'por',
          options: ['nombre', 'id']
      },
    ])

     const getRecordOptionsSearch = computed(()=> recordOptionsSearch.value)

     const getTrabajadores = computed(()=> trabajadores.value)

     const getInputs = computed(()=> inputsForm.value)

     const getVerb = computed(()=> fetchVerb.value)

     const getRoute = computed(()=> fetchRoute.value)

     const getUserType = computed(()=> userType.value)

      const setFormConf = ({inputs, verb, route})=>{
            inputsForm.value = inputs
            fetchVerb.value = verb
            fetchRoute.value = route
      }


      const setRecordOptionsSearch = ()=>{
         if (userType.value === 'render_admin') {
            recordOptionsSearch.value.unshift(      {
               name: 'from',
               text: 'desde',
               options: ['todas','pendientes', 'realizandose', 'finalizadas', 'descontinuadas']
             })
         }

         if (userType.value === 'render_current') {
            recordOptionsSearch.value.unshift({
               name: 'from',
               text: 'desde',
               options: ['pendientes', 'realizandose', 'finalizadas']
             })
         }
      }

      const setInitRender = ()=>{
         setRecordOptionsSearch()
      }

     const getDashBoard = computed(()=> [
      {
         titulo: 'Record',
         icono: 'history',
         link: {
            nombre: 'record-reciente',
            ruta: '/app/record'
         }
      },
      {
         titulo: 'Estadisticas',
         icono: 'chart-infographic',
         link: {
            nombre: 'estadisticas-display',
            ruta: '/estadisticas'
         }
      },
      {
         titulo: 'Inventario',
         icono: 'list-check',
         link: {
            nombre: 'inventario-total',
            ruta: '/inventario'
         }
      },
   ])

     return {
        getDashBoard,
        getInputs,
        getRoute,
        getVerb,
        getTrabajadores,
        getRecordOptionsSearch,
        getUserType,
        setFormConf,
        setInitRender,
     }

})
