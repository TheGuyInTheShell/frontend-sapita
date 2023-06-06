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

console.log(inputs.value)

const emits = defineEmits(['close'])

const formReactive = ref(null)

const handleSubmit = async () => {
    const form = unref(formReactive)
    const inputsForm = inputs.value.reduce((acc, curr)=> {
        const inputVal = form.querySelector('#'+curr.name).value
        return acc = {
            ...acc,
            [curr.name]: inputVal
        }
    }, {})
    await apiBase[verb.value](route.value, JSON.stringify(inputsForm))
    emits('close')
}

</script>

<template>

<form ref="formReactive" class="p-5">

        <div class="relative z-0 w-full mb-6 group" v-for="input in inputs" :key="input.name">
            <InputText v-if="input.type === 'text'" :input="input" />
            <InputSelect v-if="input.type === 'select'" :selection="input" />
            <InputFixed v-if="input.type === 'fixed'" :input="input" />
        </div>

        <button @click.prevent="handleSubmit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

</template>