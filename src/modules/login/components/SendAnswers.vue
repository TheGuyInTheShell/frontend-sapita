<script setup>
import { reactive } from 'vue';

const props = defineProps({
    questions: {
        pregunta_1: {
        type: String,
        required: true
        },
        pregunta_2: {
            type: String,
            required: true
        }
    }
})

const emits = defineEmits(["send-answers"])
const respuestas = reactive({
    respuesta_1: null,
    respuesta_2: null
})

</script>

<template>
    <fieldset class="w-full">
            <legend class="text-center mb-4">Responder preguntas de seguridad</legend>
                <form>
                <div class="mb-6">
                    <label for="usuario" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ props.questions.pregunta_1 }}</label>
                    <input v-model="respuestas.respuesta_1" id="usuario" type="email" placeholder="@ejemplo123" class="input input-bordered w-full " required/>
                </div>
                <div class="mb-6">
                    <label for="usuario" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ props.questions.pregunta_2 }}</label>
                    <input v-model="respuestas.respuesta_2" id="usuario" type="email" placeholder="@ejemplo123" class="input input-bordered w-full " required/>
                </div>
                <button @click.prevent="()=> emits('send-answers', respuestas)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </form>
        </fieldset>
</template>