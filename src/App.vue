<script setup>
import { RouterView } from 'vue-router'
import { useAlertStore } from './shared/store/alerts'
import AlertNotification from './shared/components/AlertNotification.vue';

const store = useAlertStore()

const { getAlertConfig, alertConfig } = store

</script>

<template>
  <RouterView class="absolute" />
  <AlertNotification v-show="getAlertConfig.show" :alert-config="getAlertConfig" />
</template>

<style>
  .z-29{
    z-index: 29;
  }
</style>