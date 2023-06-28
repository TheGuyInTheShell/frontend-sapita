<script setup>
import { reactive, ref } from 'vue';
import SendUser from '../components/SendUser.vue';
import SendAnswers from '../components/SendAnswers.vue';
import SendPass from '../components/SendPass.vue';
import axios from 'axios';
import { useAlertStore } from '@/shared/store/alerts'
import { useRouter } from 'vue-router';

const alertStore = useAlertStore()
const step = ref(0)
const token = ref('')
const userName = ref('')
const questions = reactive({
    pregunta_1: '',
    pregunta_2: '',
})

const router = useRouter()

const apiBase = axios.create({
    baseURL: 'http://localhost:3037/index.php/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})

const handleGetData = async (_userName)=>{
    const send = {
        'user_name': _userName
    }
    try {
    const res = await apiBase.post('recuperar', send)
    if (res.data?.error) {
        throw new Error(res.data.error)
    }
    const {user_name, temp_token, preguntas} = res.data
    if (user_name && temp_token && preguntas) {
        userName.value = user_name
        token.value = temp_token
        questions.pregunta_1 = preguntas.pregunta_1
        questions.pregunta_2 = preguntas.pregunta_2
        step.value += 1
    }
   } catch (error) {
    alertStore.setAlertConfig({
        type: 'error',
        message: error
    })
   }
}

const handleAnswerQuestions = async (answers)=>{
    const send = {
        'user_name': userName.value,
        'temp_token': token.value,
        ...answers
    }
    try {
    const res = await apiBase.post('responder', send)
    console.log(res)
    if (res.data?.error) {
        throw new Error(res.data.error)
    }
    const {temp_token} = res.data
    if (temp_token) {
        token.value = temp_token
        step.value += 1
    }
   } catch (error) {
     alertStore.setAlertConfig({
        type: 'error',
        message: error
    })
   }
}

const handleNewPassword = async (newPass)=>{
    if (newPass.pass === newPass.repeat) {
        const send = {
            'user_name': userName.value,
            'temp_token': token.value,
            'new_pass': newPass.pass,
        }
        try {
        await apiBase.post('renovar', send)
        alertStore.setAlertConfig({
        type: 'success',
        message: 'Contraseña cambiada'
        })
        router.push({name: 'login'})
        } catch (error) {
            alertStore.setAlertConfig({
                type: 'error',
                message: error
            })
        }
    }else{
        alertStore.setAlertConfig({
            type: 'warning',
            message: 'Las claves no son iguales!'
        })
    }
}

</script>

<template>
    
    <div class="p-20 w-full flex flex-col justify-center items-center ">
        <SendUser @send-user="handleGetData" v-if="step === 0" />
        <SendAnswers @send-answers="handleAnswerQuestions" :questions="questions" v-if="step === 1" />
        <SendPass @send-pass="handleNewPassword" v-if="step === 2" />
    </div>

</template>