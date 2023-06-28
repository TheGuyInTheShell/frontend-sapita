import { apiBase } from "../../app/api/useApi"
import { useSessionStore } from "../store/session"
import { useAlertStore } from "@/shared/store/alerts"
import {useContextStore} from "@/modules/app/store/context"

const sessionStore = useSessionStore()
const alertStore = useAlertStore()
const contextStore = useContextStore()

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
        const {session_hash, temp_token, render_type, trabajadores, trabajador} = resp.data
        if (session_hash && temp_token && render_type) {
            contextStore.setRenderType(render_type)
            localStorage.setItem('session_hash', session_hash)
            localStorage.setItem('temp_token', temp_token)
            sessionStore.initSession(`${trabajador.nombre} ${trabajador.apellido}`)
            contextStore.setInitRender(trabajadores)
        }
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