<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

const dateNow = new Date().toLocaleDateString()

</script>

<template>
    <header class="flex justify-between w-full h-18 fixed z-12 bg-slate-700 sm:justify-end p-2">            
    <button data-drawer-target="logoSidebar" data-drawer-toggle="logoSidebar" aria-controls="logoSidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>
    <div tabindex="0" class="dropdown flex items-center cursor-pointer space-x-4 bg-slate-300 backdrop-blur-sm py-1 px-2 rounded">
        <div class="avatar">
            <div class="w-10 bg-slate-200 rounded">
                <svg class="absolute w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <!-- <img src="/assets/default-avatar.jpg" /> -->
            </div>
        </div>
        <div class="font-medium dark:text-white">
            <h1>{{ props.name }}</h1>
            <h2 class="text-sm text-gray-500 dark:text-gray-400">{{ dateNow }}</h2>
        </div>
        </div>

    </header>
</template>

<style>
   .z-12{
      z-index: 12;
   }
</style>