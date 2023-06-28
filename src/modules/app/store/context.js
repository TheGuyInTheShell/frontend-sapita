import { defineStore } from 'pinia'
import { computed, ref, reactive  } from 'vue'

export const useContextStore = defineStore('context', ()=>{

     const renderType = ref('render_current') 

     const inputsForm = ref([])

     const fetchVerb = ref("")
     
     const fetchRoute = ref("")

     const fetchOptions = reactive({
         deletable: false,
         saveable: false
     })

     const trabajadores = ref([])

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

     const getFetchOptions = computed(()=> fetchOptions)

     const getUserType = computed(()=> renderType.value)

     const setRenderType = (type = '')=>{
         renderType.value = type
     }

      const setFormConf = ({inputs, verb, route, deletable, saveable})=>{
            inputsForm.value = inputs
            fetchVerb.value = verb
            fetchRoute.value = route
            fetchOptions.deletable = deletable
            fetchOptions.saveable = saveable
      }


      const setOptions = ()=>{
         if (renderType.value === 'render_admin') {
            if (!recordOptionsSearch.value.find(el => el.name === 'from')) {
               recordOptionsSearch.value.unshift(      {
                  name: 'from',
                  text: 'desde',
                  options: ['todas','pendientes', 'realizandose', 'finalizadas', 'descontinuadas']
                })
            }
            if(!dashBoard.value.find(el => el.titulo === 'Tokens')){
               dashBoard.value.push({
                  titulo: 'Tokens',
                  icono: 'user-plus',
                  link: {
                     nombre: 'app-tokens',
                     ruta: '/tokens'
                  }
               },)
            }
         }
         if (renderType.value === 'render_current') {
            if (!recordOptionsSearch.value.find(el => el.name === 'from')) {
            recordOptionsSearch.value.unshift({
               name: 'from',
               text: 'desde',
               options: ['pendientes', 'realizandose', 'finalizadas']
             })
            }
         }
      }

      const setInitRender = (_trabajadores)=>{
         trabajadores.value = _trabajadores?.reduce((acc, el)=>
         [
            ...acc,
            {
               id: el.id,
               nombre: `${el.nombre} ${el.apellido}`,
            }
         ]
         ,[])
         setOptions()
      }

      const dashBoard = ref([
         {
            titulo: 'Record',
            icono: 'history',
            link: {
               nombre: 'record-display',
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
               nombre: 'inventario-display',
               ruta: '/inventario'
            }
         },
         {
            titulo: 'Reportes',
            icono: 'report-analytics',
            link: {
               nombre: 'reportes-display',
               ruta: '/reportes'
            }
         },
      ])

     const getDashBoard = computed(()=> dashBoard.value)

     return {
        getDashBoard,
        getInputs,
        getRoute,
        getVerb,
        getTrabajadores,
        getRecordOptionsSearch,
        getUserType,
        getFetchOptions,
        setRenderType,
        setFormConf,
        setInitRender,
     }

})
