<script setup>
import { computed, ref, unref } from 'vue'
import InputText from './inputs/InputText.vue';
import InputSelect from './inputs/InputSelect.vue';
import InputFixed from './inputs/InputFixed.vue';
import { apiBase } from '../api/useApi';
import { useContextStore } from '../store/context';

const contextStore = useContextStore()

const inputs = computed(()=>contextStore.getInputs)
const verb = computed(()=>contextStore.getVerb)
const route = computed(()=>contextStore.getRoute)
const options = computed(()=>contextStore.getFetchOptions)

const emits = defineEmits(['close'])

const formReactive = ref(null)

const handleSubmit = async () => {
    const form = unref(formReactive)
    const inputsForm = inputs.value.reduce((acc, curr)=> {
        const inputVal = form.querySelector('#'+curr.name)
        return acc = {
            ...acc,
            [curr.name.toLowerCase()]: inputVal?.value || (inputVal?.getAttribute('data') ?? '' )
        }
    }, {})
    await apiBase[verb.value](route.value, JSON.stringify(inputsForm))
    emits('close')
}

const handleDelete = async () => {
    const form = unref(formReactive)
    const inputsForm = inputs.value.reduce((acc, curr)=> {
        const inputVal = form.querySelector('#'+curr.name)
        return acc = {
            ...acc,
            [curr.name.toLowerCase()]: inputVal?.value || (inputVal?.getAttribute('data') ?? '' ) 
        }
    }, {})
    console.log((await apiBase.delete(route.value + '/' + inputsForm?.id)).data)
    emits('close')
}

</script>

<template>

<form ref="formReactive" class="p-5">

        <div class="relative z-0 w-full mb-6 group" v-for="input in inputs" :key="input.name">
            <InputText v-if="input.type === 'text'" :input="input" />
            <InputSelect class="w-full" v-if="input.type === 'select'" :selection="input" />
            <InputFixed v-if="input.type === 'fixed'" :input="input" />
        </div>

        <div class="flex justify-between">
            <button v-if="options.saveable" @click.prevent="handleSubmit" class="btn btn-info text-white">
                Guardar
            </button>
            <button v-if="options.deletable" @click.prevent="handleDelete" class="btn btn-error text-white">
                Borrar
            </button>
        </div>

</form>

</template>