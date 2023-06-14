import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
    const logged  = ref(false)
    const session = reactive({
        session_hash: '',
        nombre: '',
        temp_token: '',
    })

    const isLogged = computed(() =>  logged.value)

    const sessionData = computed(() => session)

    const initSession = () => {
        session.session_hash = localStorage.getItem('session_hash') || ''
        session.nombre = '' || 'Usuario'
        session.temp_token = localStorage.getItem('temp_token') || ''
        if (session.session_hash && session.temp_token) {
            logged.value = true
        }else{
            logged.value = false
        }
    }

    return { isLogged, initSession, sessionData}
})