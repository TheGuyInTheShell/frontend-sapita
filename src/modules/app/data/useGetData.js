import {apiBase} from "../api/useApi"
import { useQuery } from "@tanstack/vue-query"
import { isAxiosError } from "axios"
import { computed, ref } from "vue"

function useGetData({store, subRoute}){
    const isLoading = ref(true)
    const isError = ref(false)
    const query = computed(()=> store.getQuery)
    
    const getData = async()=>{
        const route = query.value ? `${subRoute}?${query.value}` : subRoute 
        const res = await apiBase.get(route)
        return res
    }
    
    useQuery(
        [store.$id, query],
        getData,
        {
            onSuccess( res ) {
                    store.loadData(res.data)
                    isLoading.value = false
                    isError.value = false
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
            enabled: query
        },
        
    )
    return {
        isLoading,
        isError,
    }
}


export default useGetData