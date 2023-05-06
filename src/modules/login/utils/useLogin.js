import { useSessionStore } from "../store/session"
import { useAlertStore } from "@/shared/store/alerts"

const sessionStore = useSessionStore()
const alertStore = useAlertStore()

function useLogin(usuario, clave, state){
    state.loading = true
    const getSession = async (usuario, clave) => {
        try {
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        ok: true,
                        json: () => {
                            return {
                                id_session: '328r7nvhew',
                                token: '123'
                            }
                        }
                    })
                }, 2000)
            })
            if(response.ok){
                return response.json()
            }
        } catch (error) {
            console.error(error.response)
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
    }

    getSession(usuario, clave).then(resp => {
        localStorage.setItem('id_session', resp.id_session)
        localStorage.setItem('token', resp.token)
        sessionStore.initSession()
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