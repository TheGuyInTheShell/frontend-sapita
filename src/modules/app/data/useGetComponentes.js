import {apiBase} from "../api/useApi"
import { useQuery } from "@tanstack/vue-query"
import { ref } from "vue"

function useGetComponentes({badges, reporteId}){
    const isLoading = ref(true)
    const isError = ref(false)
    
    const getData = async()=>{
        const res = await apiBase.get(`reportes/${reporteId}/componentes`)
        return res
    }
    
    useQuery(
        [reporteId],
        getData,
        {
            onSuccess( res ) {
                    badges.value = res.data.content.map(badge => ({
                        text: badge.id,
                        info: `${badge.nombre} ${badge.serial}`
                    }))
                    isLoading.value = false
                    isError.value = false
            },
            onError(){
                isLoading.value = false
                isError.value = true
            }
        },
        {
            cacheTime: 1000 * 60 * 10,
        },
        
    )
    return {
        isLoading,
        isError,
    }
}

export default useGetComponentes