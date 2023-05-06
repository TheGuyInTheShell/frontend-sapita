import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
    const logged  = ref(false)
    const session = reactive({
        id_session: '',
        nombre: '',
        token: '',
    })

    const isLogged = computed(() =>  logged)

    const sessionData = computed(() => session)

    const initSession = () => {
        session.id_session = localStorage.getItem('id_session') || ''
        session.nombre = '' || 'Usuario'
        session.token = localStorage.getItem('token') || ''
        if (session.id_session && session.token) {
            logged.value = true
        }else{
            logged.value = false
        }
    }

    return { isLogged, initSession, sessionData}
})
