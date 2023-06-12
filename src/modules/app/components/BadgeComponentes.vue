<script setup>

const props = defineProps({
    badges:
        {
            type: Array,
            deletable: Boolean,
            info: String,
            text: String
        }
    
})

</script>

<template>
    
    <div v-for="(badge, ind) in props.badges"
    :key="badge.text + ind" 
     class="flex gap-2 wrap tooltip cursor-default" :data-tip="badge.info">
          <div class="badge gap-2">
          <svg
            v-if="badge?.deletable"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-4 h-4 stroke-current cursor-pointer">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          {{ badge.text }}
        </div>
        </div>

</template>