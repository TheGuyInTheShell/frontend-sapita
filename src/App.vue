<script setup>
import { RouterView } from 'vue-router'
import { useAlertStore } from './shared/store/alerts'
import AlertNotification from './shared/components/AlertNotification.vue';

const store = useAlertStore()

const { getAlertConfig, alertConfig } = store

</script>

<template>
  <RouterView class="z-10 absolute" />
  <AlertNotification v-show="getAlertConfig.show" :alert-config="getAlertConfig" />
</template>