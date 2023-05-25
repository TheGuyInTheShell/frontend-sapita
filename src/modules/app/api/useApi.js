import axios from 'axios'
import  {useSessionStore} from '@/modules/login/store/session'

const store = useSessionStore()

export const apiBase = axios.create({
    baseURL: 'http://localhost:3000/index.php/api',
    headers: {
        'Session': store.sessionData.id_session,
        'Token': store.sessionData.token
    }
})

