<script setup>
import { reactive, ref } from 'vue';
import InputSelect from '../components/inputs/InputSelect.vue'
import {apiBase} from '../api/useApi'
import {useAlertStore} from '../../../shared/store/alerts'

const selectedRol = ref(null)
const alertStore = useAlertStore()
const {data: resRoles} = await apiBase.get('roles')

const selectionOptions = reactive({
    name: 'rol',
    text: 'Selecionar rol',
    options: resRoles.content.map((rol) =>
    `${rol.id}: ${rol.nombre}`
    )
})
console.log(selectionOptions)
const handleChangeRol = (rol)=>{
    selectedRol.value = rol.value.split(':')[0]
}

const handleGetToken = async ()=>{
    if (selectedRol.value) {
        try {
            const {data} = await apiBase.get('tokens/' + selectedRol.value)
            if (data.content.token) {
                alert('Token temporal: ' + data.content.token)
            }
        } catch (error) {
            alertStore.setAlertConfig({
                type: 'error',
                message: error
            })
        }
    }
}

</script>

<template>
        <div class="flex justify-center items-center mt-16 min-h-custom p-8">
        <section class="flex flex-col w-full h-full justify-center gap-8 p-12 dark:bg-slate-600 bg-white rounded-md">
                <InputSelect class="w-full" @changeSelectionVal="handleChangeRol" :selection="selectionOptions" />
                <button @click="handleGetToken" class="btn">Generar Token de registro</button>
            </section>
        </div>
</template>