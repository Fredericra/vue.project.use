<template>
    <div>
        <div class="media">
          <div class="col-span-4 py-4 px-4">
              <div class="pr-20 border-gray-400 border-l-2">
                <p class="indent-10 text-white font-bold py-2 bg-gray-400 comic rounded-b-2xl">
                  les {{ tous.length }} pays dans le monde
                </p>
                <div class="">
                  <ul class="space-y-2 px-4 h-[450px] overflow-hidden overflow-y-scroll y">
                    <li v-for="(value,index) in tous " :key="index">
                      <router-link :to="{name:'pays',params:{name:value.name}} " class="link flex justify-between px-2 py-2">
                      <div class="space-x-2">
                        <span class="fab fa-accusoft"></span>
                        <span class="">{{ value.name }} </span>
                      </div>
                      <div :class="index>98?'h-8 w-8':'h-6 w-6'" class="px-1 py-1 rounded-full bg-violet-400 flex justify-center items-center">
                        <span class="text-white">{{ index+1 }} </span>
                      </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <p class="indent-10 text-white font-bold py-4 bg-gray-400 comic rounded-t-2xl">
                 
                </p>
              </div>
          </div>
          <div class="col-span-8 px-8">
              <div class="media space-y-10 px-10 space-x-8">
                  <div 
                  data-aos="fade-up"
                  :data-aos-delay="200*cle>2000?200:cle*200"
                  data-aos-duration="400"
                  class="col-span-6 rounded-tl-2xl border-l-2 border-gray-400 mt-8 space-x-4" v-for="(pays,cle) in tous" :key="cle">
                      <div class="bg-gray-400 rounded-tl-2xl flex justify-between px-4 py-2">
                        <div>
                          <span class="text-violet-600  px-5 font-bold">{{ pays.name }} </span>
                        </div>
                      </div>
                      <div class="space-x-4 text-blue-400 py-2">
                        <span class="underline font-bold t">Ville</span>
                          <span class="font-bold comic text-sm text-gray-400">{{ pays.capital }} </span>
                      </div>
                      <div class="space-x-4 text-blue-400 py-2">
                        <span class="underline font-bold t">Nom d'origine</span>
                          <span class="font-bold comic text-sm text-gray-400">{{ pays.nativeName }} </span>
                      </div>
                      <div class="space-x-4 text-blue-400 py-2">
                        <span class="underline font-bold t">Continet</span>
                          <span class="font-bold comic text-sm text-gray-400">{{ pays.subregion }} </span>
                      </div>
                      <div class="space-x-4 text-blue-400 py-2">
                        <span class="underline font-bold t">Surface</span>
                          <span class="font-bold comic text-sm text-gray-400">{{ pays.area }} <span class="text-sm">km/2</span> </span>
                      </div>
                      <div class="text-violet-400 font-bold">
                        <img :src="pays.flag" :alt="pays.flag">
                      </div>
                      <div class="bg-gray-400 rounded-br-2xl py-2 flex justify-end px-5">
                        <div>
                          <router-link :to="{name:'pays',params:{name:pays.name}}" class="link px-3 py-1 rounded bg-white hover:bg-violet-400 text-lg">voir <i class="fas fa-plus"></i> </router-link>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
import Monde from "../json/Monde.json";
export default {
  data () {
    return {
        tous:Monde
    }
  },

}
</script>