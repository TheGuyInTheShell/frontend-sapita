import {apiBase} from "../api/useApi"
import { useRouter } from "vue-router"
import { useQuery } from "@tanstack/vue-query"
import { isAxiosError } from "axios"
import { computed, ref } from "vue"
import { useSessionStore } from "../../login/store/session"
import ProcessEstadisticas from '../helpers/processData'

const processEstadisticas = new ProcessEstadisticas()

const useGetEstadisticas = ( hash )=>{
    const router = useRouter()
    const sessionStore = useSessionStore()
    const tries = ref(0)
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
                if(error.response.status === 401){
                    tries.value += 1
                    if (tries.value === 2) {
                        sessionStore.dropSession()
                        router.push({name: 'login'})
                    }
                }
                isError.value = true
                isLoading.value= false
            }
        },
        {
            cacheTime: 1000 * 60 * 10,
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