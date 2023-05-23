<script setup>
const props = defineProps({
  subRutasNavegables: {
    titulo: String,
    icono: String,
    link: {
      nombre: String,
      ruta: String
    }
  }
})
</script>

<template>
  <nav class="h-16">
    <div class="float-layout flex justify-around z-10">
      <div 
        class="dropdown dropdown-hover" 
        v-for="subRuta in props.subRutasNavegables"
        :key="subRuta.link.nombre"
        >
        <label tabindex="0" class="btn m-1">{{ subRuta.titulo }}</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
