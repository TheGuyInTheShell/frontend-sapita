import { ref, computed } from "vue"


const dataUtil = () => {
    const data = ref([])

    const getData = computed(() => data.value)

    const query = ref('')

    const showNavs = ref(true)
    
    const getShow = computed(()=> showNavs.value)

    const refetchCall = ref(()=>{})

    const getRefetchCall = computed(()=> refetchCall.value)

    function setRefetchCall(refetch) {
        refetchCall.value = refetch
    }

    function swapShow(){
        showNavs.value = !showNavs.value
    }

    const urlEncode = new URLSearchParams()

    const getQuery = computed(() => query.value)

    function setQuery(arrayParameter) {
        arrayParameter.forEach(el => {
            urlEncode.delete(el.key)
            urlEncode.append(el.key, el.value)
        })
        urlEncode.delete('pag')
        urlEncode.append('pag', paginationSelected.value)
        query.value = urlEncode.toString()
    }

    const paginationSelected = ref(0)
    
    const getPagination = computed(() => paginationSelected.value)

    const setPagination = (value) => {
        if (value >= 0) {
            urlEncode.delete('pag')
            paginationSelected.value = value
            urlEncode.append('pag', value)
            query.value = urlEncode.toString()
        }
    }

    const resetQuery = ()=>{
        query.value = ''
        paginationSelected.value = 0
    }

    const loadData = (_data = []) => {
        data.value = _data
    }
    
    return {
        getData,
        getQuery,
        setQuery,
        loadData,
        getPagination,
        setPagination,
        resetQuery,
        getShow,
        swapShow,
        getRefetchCall,
        setRefetchCall,
    }
}

export default dataUtil