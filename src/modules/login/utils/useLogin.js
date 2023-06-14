import { apiBase } from "../../app/api/useApi"
import { useSessionStore } from "../store/session"
import { useAlertStore } from "@/shared/store/alerts"

const sessionStore = useSessionStore()
const alertStore = useAlertStore()

function useLogin({
    usuario, 
    clave, 
    state
}){
    state.loading = true
    apiBase.post('login', {
        usuario,
        clave
    }).then(resp => {
        if (resp.data.session_hash && resp.data.temp_token) {
            localStorage.setItem('session_hash', resp.data.session_hash)
            localStorage.setItem('temp_token', resp.data.temp_token)
            sessionStore.initSession()
        }
        console.log(sessionStore.sessionData, resp.data)
        state.loading = false
    }).catch(err => {
        console.error(err)
        alertStore.setAlertConfig({
            show: true,
            message: 'Error al iniciar sesión',
            type: 'error',
        })
        state.loading = false
    })

}


export default useLogin