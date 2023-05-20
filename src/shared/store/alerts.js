import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alerts', () => {
  const alertConfig = reactive({
    show: false,
    message: '',
    type: 'error'
  })

  const getAlertConfig = computed(() => alertConfig)

  function hideAlert() {
    alertConfig.show = false
  }

  function setAlertConfig(config) {
    alertConfig.show = true
    alertConfig.message = config.message
    alertConfig.type = config.type
    setTimeout(() => {
      hideAlert()
    }, 2000)
  }
  
  return { getAlertConfig, setAlertConfig, alertConfig }
})
