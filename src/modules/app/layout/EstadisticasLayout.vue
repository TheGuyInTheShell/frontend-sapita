<script setup>
import {defineAsyncComponent} from 'vue'
const FloatNav = defineAsyncComponent(()=>import('../components/FloatNav.vue'))

</script>


<template>
    <FloatNav>
        content
    </FloatNav>
    <section class="margin-float flex flex-col gap-6">
        <RouterView />
    </section>
  </template>
  
  