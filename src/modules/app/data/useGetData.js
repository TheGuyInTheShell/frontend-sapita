import {apiBase} from "../api/useApi"
import { useQuery } from "@tanstack/vue-query"
import { isAxiosError } from "axios"
import { ref } from "vue"

function useGetData({store, subRoute, parameter}){
    const isLoading = ref(true)
    const isError = ref(false)

    const route = parameter ? `${subRoute}/${parameter}` : subRoute 

    const getData = async()=>{
        const res = await apiBase.get(route)
        return res
    }
    
    useQuery(
        ['characters'],
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
        }
        // {
        //     cacheTime: 1000 * 60 * 5,
        //     refetchOnReconnect: 'always',
        // }
    )
    return {
        isLoading,
        isError,
    }
}


export default useGetData