import {apiBase} from "../api/useApi"
import { useQuery } from "@tanstack/vue-query"
import { isAxiosError } from "axios"
import { computed, ref } from "vue"
import ProcessEstadisticas from '../helpers/processData'

const processEstadisticas = new ProcessEstadisticas()

const useGetEstadisticas = ( hash )=>{
    const isLoading = ref(true)
    const isError = ref(false)
    const subRoute = computed(()=> '/' + hash.value.substring(1) || '')
    const dataPackage = ref([])

    const getData = async ()=>{
        const res = await apiBase.get('estadisticas' + subRoute.value )
        return res
    }
    
    useQuery(
        [`estadisticas${hash.value}`, subRoute],
        getData,
        {
           async onSuccess( res ) {
                   try {
                    dataPackage.value = await processEstadisticas.toChartData(res.data) 
                    isLoading.value = false
                    isError.value = false
                   } catch (error) {
                    console.error(error)
                    isLoading.value = false
                    isError.value = true
                   }
            },
            onError(error){
                if (isAxiosError(error)) {
                    console.error('axios error: ', error)
                }else{
                    console.error(error)
                }
                isError.value = true
                isLoading.value= false
            }
        },
        {
            cacheTime: 1000 * 60 * 3,
            enabled: subRoute
        },
        
    )
    return {
        dataPackage,
        isLoading,
        isError,
    }
}

export default useGetEstadisticas