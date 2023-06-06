import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useContextStore = defineStore('context', ()=>{

     const inputsForm = ref([])

     const fetchVerb = ref("")
     
     const fetchRoute = ref("")

     const getInputs = computed(()=> inputsForm.value)

     const getVerb = computed(()=> fetchVerb.value)

     const getRoute = computed(()=> fetchRoute.value)

      const setFormConf = ({inputs, verb, route})=>{
            inputsForm.value = inputs
            fetchVerb.value = verb
            fetchRoute.value = route
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
        setFormConf,
     }

})
