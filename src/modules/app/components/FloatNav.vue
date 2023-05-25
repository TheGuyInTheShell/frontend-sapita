<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  subRutasNavegables: {
    titulo: String,
    icono: String,
    link: {
      nombre: String,
      ruta: String
    }
  },
  busqueda: {
    type: Boolean
  }
})

const floatNavContent = ref(null)

const searchInput = ref(null)

const resizeObserver = new ResizeObserver(()=>{
  document.documentElement.style.setProperty('--sizeVariable', `${floatNavContent.value?.offsetHeight + 30}px`);

})

onMounted(()=>{
    resizeObserver.observe(floatNavContent.value)  
})


let lastKeyPressTime = 0

const handleKeyPressFetch = (ev)=> {
  lastKeyPressTime = ev.timeStamp
  const waitTimeFetch = 600 
  setTimeout(()=>{
    const sleepTime = performance.now() - lastKeyPressTime 
    if (sleepTime > waitTimeFetch) {
      // do some fetch
    }
  }, waitTimeFetch)
}

</script>

<template>
  <nav class="float-layout-w">
    <div ref="floatNavContent" class="float-layout-w fixed z-12 flex flex-wrap place-items-center bg-gray-500 p-2 gap-4 sm:-translate-x-2 z-10">
      
      <section v-if="props.busqueda" class="w-full">
        <input v-model="searchInput" @keyup="handleKeyPressFetch" type="text" placeholder="Busqueda" class="input input-bordered input-info w-full" />
      </section>

      <section class="flex flex-wrap">
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
      </section>
    </div>
  </nav>
</template>

<style scoped>
.z-12{
  z-index: 12;
}
</style>
