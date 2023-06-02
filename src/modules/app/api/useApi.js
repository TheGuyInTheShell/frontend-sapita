import axios from 'axios'
import  {useSessionStore} from '@/modules/login/store/session'

const store = useSessionStore()

export const apiBase = axios.create({
    baseURL: 'http://localhost:3037/index.php/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Session': store.sessionData.id_session,
        'Token': store.sessionData.token
    }
})

