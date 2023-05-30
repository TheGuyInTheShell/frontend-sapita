import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInventarioStore = defineStore('inventario', () => {
    const inventarioInScreen = ref([])
    const getInventario = computed(() => inventarioInScreen.value)

    const paginationSelected = ref(1)
    
    const getPagination = computed(() => paginationSelected.value)

    function setPagination(value) {
        paginationSelected.value = value
        console.log(paginationSelected.value)
    }

    function loadData(data = []) {
        inventarioInScreen.value = data
    }
    
    return {
        getInventario,
        loadData,
        getPagination,
        setPagination
    }

})
