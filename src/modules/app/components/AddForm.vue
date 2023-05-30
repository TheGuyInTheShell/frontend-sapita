<script setup>
import { inject, ref, unref, defineEmits } from 'vue'
import InputText from './inputs/InputText.vue';
import InputSelect from './inputs/InputSelect.vue';
import { apiBase } from '../api/useApi';

const emits = defineEmits(['close'])

const route = inject("route")
const inputs = inject("inputs")
const formReactive = ref(null)

const handleSubmit = async () => {
    const form = unref(formReactive)
    const inputsForm = inputs.reduce((acc, curr)=> {
        const inputVal = form.querySelector('#'+curr.name).value
        return acc = {
            ...acc,
            [curr.name]: inputVal
        }
    }, {})
    await apiBase.post(route, JSON.stringify(inputsForm))
    emits('close')
}

</script>

<template>

<form ref="formReactive" class="p-5">

        <div class="relative z-0 w-full mb-6 group" v-for="input in inputs" :key="input.name">
            <InputText v-if="input.type === 'text'" :input="input" />
            <InputSelect v-if="input.type === 'select'" :selection="input" />
        </div>

        <button @click.prevent="handleSubmit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

</template>