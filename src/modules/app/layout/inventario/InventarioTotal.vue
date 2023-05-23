<script setup>
import  {defineAsyncComponent} from 'vue'

const ItemInventario = defineAsyncComponent(()=> import('../../components/ItemInventario.vue'))

</script>

<template>

        <ItemInventario nombre="Pussy" tipo="Componente" descripcion="Pa folla y mia" />
        <ItemInventario nombre="Pussy" tipo="Componente" descripcion="Pa folla y mia" />
</template>