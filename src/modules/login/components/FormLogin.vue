<script setup>
import {ref, onBeforeMount, reactive, watchEffect, computed} from 'vue'
import useLogin from '../utils/useLogin'
import {useSessionStore} from  '../store/session'
import {useRouter} from 'vue-router'
import { RouterLink } from 'vue-router'
import SpinnerLoader from '../../app/components/SpinnerLoader.vue'

const route = useRouter()
const sessionStore = useSessionStore()

const usuario = ref('')
const clave = ref('')
const state = reactive({
    loading: false,
})

const sessionData = sessionStore.sessionData 
const initSession = sessionStore.initSession
const isLogged = computed(()=> sessionStore.isLogged)

onBeforeMount(()=>{
    initSession() 
    if (isLogged.value && sessionData.session_hash) {
        route.push({name: 'record-display'})
    }
})


watchEffect(()=>{
    if (isLogged.value && sessionData.session_hash) {
        route.push({name: 'record-display'})
    }
})

function handleLogin (ev){
    ev.preventDefault()
    useLogin({
        usuario: usuario.value, 
        clave: clave.value, 
        state
    })
}

</script>

<template>
            <div class="p-4 w-full flex flex-col justify-center items-center" v-if="state.loading">
                <SpinnerLoader />
            </div>
            <div v-else class="p-4 w-full flex flex-col justify-center items-center ">
                    <fieldset class="w-full">
                        <legend class="text-center mb-4"> Log in </legend>
                            <form>
                            <div class="mb-6">
                                <label for="usuario" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                <input v-model="usuario" id="usuario" type="email" placeholder="Usuario" class="input input-bordered w-full " required/>
                            </div>
                            <div class="mb-6">
                                <label for="clave" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input v-model="clave" id="clave" type="password" placeholder="*********" class="input input-bordered w-full" required />
                            </div>
                            <button @click="handleLogin" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
                            </form>
                    </fieldset>
                    <div class="my-6">
                        Recuperar contraseña,
                        <RouterLink class="text-blue-500 hover:text-blue-700" to="login/recuperar" >
                            Aqui!
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink class="text-blue-500 hover:text-blue-700" to="register" >
                            Registrarse
                        </RouterLink>
                    </div>
            </div>

</template>