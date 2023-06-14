<script setup>
import {defineAsyncComponent} from 'vue'
import { useRouter } from 'vue-router';

const route = useRouter()

const BadgeComponentes = defineAsyncComponent(()=> import('../../components/BadgeComponentes.vue'))

const badges = [
  {
    info: 'XD',
    text: 'test'
  }
]

const handleToFormAddReport = ()=>{
  route.push({name: 'reportes-agg'})
}

</script>


<template>
  <section class="btn-to fixed flex items-end pb-10 z-13">
      <button :onclick="handleToFormAddReport" class="btn">
        <p class="text-xl font-bold">+</p>
      </button>
   </section>

  <section class="bg-white h-full rounded-md w-full mt-10">
    <div class="p-4 flex flex-col gap-2">
      <section class="grid grid-flow-col gap-2 justify-between">
        
        <div class="col-span-12 p-2 border-current border rounded-md flex gap-2 items-center">
          <p class="font-bold text-xl -translate-y-0.5">Componentes Usados:</p>
          <BadgeComponentes :badges="badges" />
        </div>

        <div class="dropdown dropdown-left dropdown-hover">
            <label tabindex="0" class="btn m-1">Tarea</label>
            <div tabindex="0" class="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
              <div class="card-body">
                <h2 class="card-title">You needed more info?</h2> 
                <p>Here is a description!</p>
              </div>
            </div>
        </div>

      </section>
      <article class="border-black border rounded-md p-2">
        <h2 class="font-bold text-xl">Descripcion:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nam laborum consequuntur
          minus, aspernatur eligendi repellendus exercitationem ratione voluptatem praesentium
          ipsum, porro voluptate inventore eaque alias consectetur omnis quae. Quod?
        </p>
      </article>
    </div>
  </section>
</template>


<style>

.btn-to{
    transform: translate(calc(100vw - 5rem), calc(80vh - 13rem));
}

@media (min-width: 638px){
  
    .btn-to{
        transform: translate(calc(100vw - 22rem), calc(75vh - 10rem));
    }

  }
   

</style>