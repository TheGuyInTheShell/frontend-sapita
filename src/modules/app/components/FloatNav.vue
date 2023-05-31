<script setup>
import { onMounted, ref } from 'vue';

const floatNavContent = ref(null)

const resizeObserver = new ResizeObserver(()=>{
  document.documentElement.style.setProperty('--sizeVariable', `${floatNavContent.value?.offsetHeight + 30}px`);

})

onMounted(()=>{
    resizeObserver.observe(floatNavContent.value)  
})

</script>

<template>
  <nav class="float-layout-w">
    <div ref="floatNavContent" class="float-layout-w fixed z-12 flex flex-wrap place-items-center bg-gray-500 p-2 -translate-x-2 z-10">
     <slot></slot>
    </div>
  </nav>
</template>

<style>
.z-12{
  z-index: 12;
}
</style>
