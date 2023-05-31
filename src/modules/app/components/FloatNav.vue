<script setup>
import { onMounted, ref, watch } from 'vue';
import InputSelect from './inputs/InputSelect.vue';

const props = defineProps({
  selections: {
    type: Array,
    required: true
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

const addToQueryBuild = (data)=>{
      queryBuild.value = queryBuild.value.filter(el => el.key !== data.key)
      queryBuild.value.push(data)
}

let lastKeyPressTime = 0

const handleKeyPressFetch = (ev)=> {
  lastKeyPressTime = ev.timeStamp
  const waitTimeFetch = 100 
  setTimeout(()=>{
    const sleepTime = performance.now() - lastKeyPressTime 
    if (sleepTime > waitTimeFetch) {
      addToQueryBuild({
        key: 'search',
        value: ev.target.value
      })
    }
  }, waitTimeFetch)
}

</script>

<template>
  <nav class="float-layout-w">
    <div ref="floatNavContent" class="float-layout-w fixed z-12 flex flex-wrap place-items-center bg-gray-500 p-2 -translate-x-2 z-10">
      
      <section v-if="props.busqueda" class="flex align-middle justify-center w-full">
        <input @keyup="handleKeyPressFetch" type="text" placeholder="Busqueda" class="input input-bordered input-info w-full sm:w-3/4" />
      </section>

      <section class="flex flex-wrap gap-2">
          <InputSelect v-for="selection in props.selections" :key="selection.name" :selection="selection" @changeSelectionVal="addToQueryBuild" />
      </section>
    </div>
  </nav>
</template>

<style>
.z-12{
  z-index: 12;
}
</style>
