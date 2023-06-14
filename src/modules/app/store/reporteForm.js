import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useReportesStore = defineStore('reporteForm', ()=>{

    const saveComponents = ref(new Map())

    const stockComponents = ref(new Map())

    const getSaveComponets = computed(()=> saveComponents.value)

    const getStockComponets = computed(()=> stockComponents.value)

    const setStockComponets = (data = [])=>{
       data.forEach(comp => 
        setTimeout(()=>{
            stockComponents.value.set(comp.id, {
                nombre: comp.nombre,
                serial: comp.serial,
                marca: comp.marca,
                modelo: comp.modelo
            })
        })
       )
    }

    const toStockComponents = (id)=>{
        if(saveComponents.value.has(id)){
            stockComponents.value(id, saveComponents.value.get(id))
            saveComponents.value.delete(id)
        }
    }

    const toSaveComponets = (id)=>{
        if(stockComponents.value.has(id)){
            saveComponents.value(id, stockComponents.value.get(id))
            stockComponents.value.delete(id)
        }
    }

    const toJsonData = (descripcion = '')=>{

        return JSON.stringify({
            descripcion,
            componentes_usados: [...saveComponents.value].map(([key])=> key).join(';')
        })
    } 

    return {
        getSaveComponets,
        getStockComponets,
        setStockComponets,
        toSaveComponets,
        toStockComponents,
        toJsonData
    }

})