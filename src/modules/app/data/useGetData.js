import {apiBase} from "../api/useApi"
import { useQuery } from "@tanstack/vue-query"
import { isAxiosError } from "axios"
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { useSessionStore } from '../../login/store/session'

function useGetData({store, subRoute}){
    const router = useRouter()
    const sessionStore = useSessionStore()
    const tries = ref(0)
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
                    store.loadData(res.data.content)
                    tries.value = 0
                    isLoading.value = false
                    isError.value = false
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