<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

</script>

<template>
    <div class="hero min-h-screen">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Bienvenidos</h1>
      <p class="mb-5">Administración de inventario y tareas de la alcaldía de Carirubana. Esta aplicación tiene como objetivo principal ayudar a la alcaldía a mantener un control eficiente de su inventario y gestionar las tareas de forma efectiva.</p>
      <button @click="()=> router.push({name: 'login'})" class="btn btn-info text-white">Entrar</button>
    </div>
  </div>
</div>
</template>

<style>
    .hero{
        background-image: url('/assets/alcaldia_banner.jpg');
    }
</style>
