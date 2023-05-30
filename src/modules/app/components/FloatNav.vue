<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  subRutasNavegables: {
    titulo: String,
    icono: String,
    nombre: String,
    ruta: String
  },
  busqueda: {
    type: Boolean
  },
  store: {
    type: Object
  }
})


const floatNavContent = ref(null)

const queryBuild = ref([])

watch(queryBuild ,()=>{
  props.store.setQuery(queryBuild.value)
})

const resizeObserver = new ResizeObserver(()=>{
  document.documentElement.style.setProperty('--sizeVariable', `${floatNavContent.value?.offsetHeight + 30}px`);

})

onMounted(()=>{
    resizeObserver.observe(floatNavContent.value)  
})



let lastKeyPressTime = 0

const handleKeyPressFetch = (ev)=> {
  lastKeyPressTime = ev.timeStamp
  const waitTimeFetch = 100 
  setTimeout(()=>{
    const sleepTime = performance.now() - lastKeyPressTime 
    if (sleepTime > waitTimeFetch) {
      queryBuild.value = queryBuild.value.filter(el => el.key !== 'search')
      queryBuild.value.push({
        key: 'search',
        value: ev.target.value
      })
    }
  }, waitTimeFetch)
}

</script>

<template>
  <nav class="float-layout-w">
    <div ref="floatNavContent" class="float-layout-w fixed z-12 flex flex-wrap place-items-center bg-gray-500 p-2 gap-4 -translate-x-2 z-10">
      
      <section v-if="props.busqueda" class="flex align-middle justify-center w-full">
        <input @keyup="handleKeyPressFetch" type="text" placeholder="Busqueda" class="input input-bordered input-info w-full sm:w-3/4" />
      </section>

      <section class="flex flex-wrap">
          <div 
          class="dropdown dropdown-hover" 
          v-for="subRuta in props.subRutasNavegables"
          :key="subRuta.nombre"
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

<style>
.z-12{
  z-index: 12;
}
</style>
