<script setup>
import { reactive } from 'vue';
import { apiBase } from '../../app/api/useApi';
import {useAlertStore} from '../../../shared/store/alerts'
import {useRouter} from 'vue-router'

const router = useRouter()
const alerts = useAlertStore()
const {data} = await apiBase.get('register')
const campos = reactive({
  pregunta_1: data.content[0],
  pregunta_2: data.content[1]
})

const handleRegister = async () => {
  const $ = element => document.getElementById(element).value
  const notify = alerts.setAlertConfig
  const nombre = $('nombre')
  const apellido = $('apellido')
  const cedula = $('cedula')
  const usuario = $('usuario')
  const respuesta_1 = $('respuesta_1')
  const respuesta_2 = $('respuesta_2')
  const token = $('token')
  const clave = $('clave')
  const repeat = $('repeat')
  if (nombre && apellido && cedula && usuario && respuesta_1 && respuesta_2 && token && clave && repeat) {
    if (!/^[1-9]\d{6,7}$/.test(cedula) ) {
     return notify({
        type: 'warning',
        message: 'Cedula invalida'
      })
    }
    if (clave !== repeat) {
      return notify({
        type: 'warning',
        message: 'Las Contraseñas no son iguales'
      })
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.$#!?])[A-Za-z\d.$#!?]{8,}$/.test(clave)) {
      return notify({
        type: 'warning',
        message: 'Contraseña insegura'
      })
    }
    if (usuario.length <= 5) {
      return notify({
        type: 'warning',
        message: 'El usuario necesita minimo 6 caracteres'
      })
    }
    try {
      const {data} = await apiBase.post('register', {
        nombre,
        apellido,
        cedula,
        usuario,
        pregunta_1: campos.pregunta_1.id,
        respuesta_1,
        pregunta_2: campos.pregunta_2.id,
        respuesta_2,
        token,
        clave,
      })
      if (data.content) {
        notify({
          type: 'success',
          message: `Registrado exitosamente ${usuario}`
        })
        router.push({name: 'login'})
      }
    } catch (error) {
      console.log(error)
    }
  }else{
    return notify({
      type: 'warning',
      message: 'Algunos campos estan vacios'
    })
  }
}

</script>

<template>
  <div class="p-4 px-20 w-full flex flex-col justify-center items-center ">
        <fieldset class="w-full">
                <form>
                  <div class="mb-4">
                    <input id="nombre" type="text" placeholder="Nombre" class="input input-bordered w-full " required/>
                </div>
                <div class="mb-4">
                    <input id="apellido" type="text" placeholder="Apellido" class="input input-bordered w-full " required/>
                </div>
                <div class="mb-4">
                    <input id="cedula" type="text" placeholder="Cedula" class="input input-bordered w-full " required/>
                </div>
                  <!--  -->
                  <div class="mb-4">
                      <input id="usuario" type="text" placeholder="Nombre de Usuario" class="input input-bordered w-full " required/>
                  </div>
                  <div class="mb-4">
                    <input id="respuesta_1" type="text" :placeholder="campos.pregunta_1.Nombre" class="input input-bordered w-full" required />
                </div>
                <div class="mb-4">
                    <input id="respuesta_2" type="text" :placeholder="campos.pregunta_2.Nombre" class="input input-bordered w-full" required />
                </div>
                <div class="mb-4">
                    <input id="token" type="password" placeholder="Token secreto" class="input input-bordered w-full" required />
                </div>
                <div class="mb-4">
                    <input id="clave" type="password" placeholder="Contraseña" class="input input-bordered w-full" required />
                </div>
                <div class="mb-4">
                    <input id="repeat" type="password" placeholder="Repitir la contraseña" class="input input-bordered w-full" required />
                </div>
                <button @click.prevent="handleRegister" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse</button>
                </form>
        </fieldset>
  </div>
</template>
  