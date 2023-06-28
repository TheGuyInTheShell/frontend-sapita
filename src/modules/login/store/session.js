import { ref, computed, reactive } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
    const logged  = ref(false)
    const session = reactive({
        session_hash: '',
        nombre: '',
        temp_token: '',
        trabajadores: []
    })

    const isLogged = computed(() =>  logged.value)

    const sessionData = computed(() => session)

    const initSession = (nombre) => {
        session.session_hash = localStorage.getItem('session_hash') || ''
        session.nombre = nombre
        session.temp_token = localStorage.getItem('temp_token') || ''
        if (session.session_hash && session.temp_token) {
            logged.value = true
        }else{
            logged.value = false
        }
    }

    const dropSession = async ()=> {
        axios.delete('http://localhost:3037/index.php/api/drop', {
            headers: {
                'Session-hash': session.session_hash
            }
        })
        session.nombre = ''
        session.session_hash = ''
        session.temp_token = ''
        session.trabajadores = []
        localStorage.removeItem('session_hash')
        localStorage.removeItem('temp_token')
        logged.value = false 
    }

    return { isLogged, initSession, sessionData, dropSession}
})