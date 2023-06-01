<script setup>

import { ref, watch } from 'vue';
import InputSelect from '../inputs/InputSelect.vue';

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

const queryBuild = ref([])

watch(queryBuild ,()=>{
  props.store.setQuery(queryBuild.value)
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
        <section v-if="props.busqueda" class="flex align-middle justify-center w-full">
            <input @keyup="handleKeyPressFetch" type="text" placeholder="Busqueda" class="input input-bordered input-info w-full sm:w-3/4" />
        </section>

        <section class="flex flex-wrap gap-2">
            <InputSelect v-for="selection in props.selections" :key="selection.name" :selection="selection" @changeSelectionVal="addToQueryBuild" />
        </section>
</template>