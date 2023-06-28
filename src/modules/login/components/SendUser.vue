<script setup>
import { ref } from 'vue';


const emits = defineEmits(["send-user"])
const userName = ref('')

</script>

<template>
    <fieldset class="w-full">
            <legend class="text-center mb-4">Recuperar contraseña</legend>
                <form>
                <div class="mb-6">
                    <label for="usuario" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                    <input v-model="userName" id="usuario" type="email" placeholder="@ejemplo123" class="input input-bordered w-full " required/>
                </div>
                <button @click.prevent="()=> emits('send-user', userName)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                </form>
        </fieldset>
</template>