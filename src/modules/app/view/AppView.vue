<script setup>

    import { computed, watch, onBeforeMount } from 'vue'
import { initDrawers, initCollapses } from 'flowbite'
import NavBar from '../components/NavBar.vue'
import DashBoard from '../components/DashBoard.vue'
import { useSessionStore } from '../../login/store/session'
import { useRouter } from 'vue-router'

const router = useRouter()

const sessionStore = useSessionStore()
const isLogged = computed(()=> sessionStore.isLogged)


watch(isLogged, ()=>{
    if (!isLogged.value) {
        router.push({name: 'login'})
    }
})

sessionStore.initSession(sessionStore.sessionData.nombre)
onBeforeMount(() => {
    initCollapses();
    initDrawers();
})

</script>

<template>

        <div class="w-full">
            <NavBar :name="sessionStore.sessionData.nombre" />
            <DashBoard />
            <Suspense>
                <main class="pl-2 sm:p-2 sm:ml-64 bg-slate-800 overflow-hidden">
                    <RouterView />
                </main>
            </Suspense>
        </div>

</template>

<style scoped>

main{
    padding-top: 4rem;
}

</style>