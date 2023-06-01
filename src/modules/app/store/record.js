import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecordStore = defineStore('record', () => {
    const recordInScreen = ref([])

    const getRecord = computed(() => recordInScreen.value)

    const query = ref('')
    
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

    function setPagination(value) {
        if (value >= 0) {
            urlEncode.delete('pag')
            paginationSelected.value = value
            urlEncode.append('pag', value)
            query.value = urlEncode.toString()
        }
    }

    function loadData(data = []) {
        recordInScreen.value = data
    }
    
    return {
        getRecord,
        getQuery,
        setQuery,
        loadData,
        getPagination,
        setPagination,
    }

})