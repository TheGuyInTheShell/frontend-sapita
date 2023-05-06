<script setup>
import {ref, onBeforeMount, reactive, watchEffect} from 'vue'
import useLogin from '../utils/useLogin'
import {useSessionStore} from  '../store/session'
import {useRouter} from 'vue-router'

const route = useRouter()
const store = useSessionStore()
const usuario = ref('')
const clave = ref('')
const state = reactive({
    loading: false,
})
const {initSession, sessionData, isLogged} = store


onBeforeMount(()=>{
    initSession()
    if (isLogged.value && sessionData.id_session && sessionData.token) {
        route.push('/app')
    }
})


watchEffect(()=>{
    if (isLogged.value && sessionData.id_session && sessionData.token) {
        console.log('pass')
        route.push('/app')
    }
})

function handleLogin (ev){
    ev.preventDefault()
    useLogin(usuario.value, clave.value, state)
}

</script>

<template>
            <h1 v-if="state.loading">Cargando...</h1>
            <div class="p-4 w-full flex flex-col justify-center items-center ">
                    <fieldset class="w-full">
                        <legend class="text-center mb-4"> Log in</legend>
                            <form>
                            <div class="mb-6">
                                <label for="usuario" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                <input v-model="usuario" id="usuario" type="email" placeholder="@ejemplo123" class="input input-bordered w-full " required/>
                            </div>
                            <div class="mb-6">
                                <label for="clave" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input v-model="clave" id="clave" type="password" placeholder="*********" class="input input-bordered w-full" required />
                            </div>
                            <button @click="handleLogin" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
                            </form>
                    </fieldset>
            </div>

</template>