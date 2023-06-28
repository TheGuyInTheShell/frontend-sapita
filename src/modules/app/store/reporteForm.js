import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useReporteFormStore = defineStore('reporteForm', ()=>{

    const saveComponents = ref(new Map())

    const stockComponents = ref(new Map())

    const getSaveComponets = computed(()=> saveComponents.value)

    const getStockComponets = computed(()=> stockComponents.value)

    const setStockComponets = (data = [])=>{
       data.forEach(comp => 
        setTimeout(()=>{
            stockComponents.value.set(+comp.id, {
                nombre: comp.nombre,
                serial: comp.serial,
            })
        })
       )
    }

    const toStockComponents = (id)=>{
        id = +id
        if(saveComponents.value.has(id)){
            stockComponents.value.set(id, saveComponents.value.get(id))
            saveComponents.value.delete(id)
        }
    }
    
    const toSaveComponets = (id)=>{
        id = +id
        if(stockComponents.value.has(id)){
            saveComponents.value.set(id, stockComponents.value.get(id))
            stockComponents.value.delete(id)
        }
    }

    const toJsonData = (descripcion = '', tarea_id = '')=>{
        return JSON.stringify({
            descripcion,
            tarea_id: +tarea_id.split(':')[0],
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