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

  function setAlertConfig({type, message}) {
    alertConfig.show = true
    alertConfig.type = type
    alertConfig.message = message
    setTimeout(() => {
      hideAlert()
    }, 2000)
  }
  
  return { getAlertConfig, setAlertConfig, alertConfig }
})
