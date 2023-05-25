import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecordStore = defineStore('record', () => {
    const recordInScreen = ref([])

    const getRecord = computed(() => recordInScreen.value)

    const paginationSelected = ref(1)
    
    const pagination = computed(() => paginationSelected.value)

    function setPagination(value) {
        paginationSelected.value = value
    }

    function loadData(data = []) {
        recordInScreen.value = data
    }
    
    return {
        getRecord,
        loadData,
        pagination,
        setPagination,
    }

})