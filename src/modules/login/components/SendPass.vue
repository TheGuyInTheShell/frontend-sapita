<script setup>
import { reactive } from 'vue';

const emits = defineEmits(["send-pass"])
const passes = reactive({
    pass: '',
    repeat: ''
})

</script>

<template>
    <fieldset class="w-full">
            <legend class="text-center mb-4">Nueva contraseña</legend>
                <form>
                <div class="mb-6">
                    <label for="usuario" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input v-model="passes.pass" id="usuario" type="email" placeholder="@ejemplo123" class="input input-bordered w-full " required/>
                </div>
                <div class="mb-6">
                    <label for="usuario" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repetir contraseña</label>
                    <input v-model="passes.repeat" id="usuario" type="email" placeholder="@ejemplo123" class="input input-bordered w-full " required/>
                </div>
                <button @click.prevent="()=> emits('send-pass', passes)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </form>
        </fieldset>
</template>