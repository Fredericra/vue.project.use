<template>
  <div class="relative">
      <div class="py-2 px-2 bg-gray-200 sticky top-0 z-20">
        <div class="media">
          <div class="col-span-3 py-1 comic">
            <p class="font-bold text-gray-400">savez-vous le monde <span class="text-blue-400 text-xl">?</span></p>
          </div>
          <div class="col-span-6">
              <div class="media">
                <div class="col-span-4 relative" v-if="$route.name==='home'">
                  <input type="text"
                  @input="mitady"
                  @keydown="searching"
                  v-model="search"
                  placeholder="searching"
                   class="h-9 rounded-full indent-8 w-full bg-gray-300 font-bold text-gray-500">
                   <i class="fas fa-search text-gray-500 absolute top-3 left-3"></i>
                </div>
                <div class="col-span-8 relative" v-if="$route.name==='home'">
                    <div class="absolute top-4 bg-white shadow hover:shadow-lg px-2 py-1 left-0 w-[340px]" :class="!menu?'hidden':''">
                        <div :class="tous.length>5?'h-[250px]':'h-auto'" class=" overflow-hidden overflow-y-auto y">
                          <div class="flex justify-end items-center px-2 py-2 space-x-4">
                          <button class="fas fa-window-close fa-lg text-gray-400" @click.prevent="ferme"></button>
                          </div>
                            <ul class="space-y-2">
                              <li v-for="(value,index) in tous" :key="index">
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
                    </div>
                </div>
              </div>
          </div>
          <div class="col-span-3 flex justify-end px-4 space-x-4" >
                  <router-link to="/" class="link space-x-2">
                      <span></span>
                      <span class="fas fa-globe"></span>
                      <span>Acceuil</span>
                    </router-link> <router-link to="/about" class="link space-x-2">
                      <span></span>
                      <span>About</span>
                      <span class="fas fa-question"></span>
                    </router-link>
          </div>
        </div>
      </div>
      <div class="py-2" >
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router"
import Swal from "sweetalert2"
import Monde from "./json/Monde.json"
export default {
  methods: {
    ferme()
    {
      this.menu=false;
      this.search="";
      this.corps=false;
    },
    searching()
    {
      const route = useRoute()
      const regex = RegExp(this.search.toLowerCase())
      const recherche = Monde.filter(item=>regex.test(item.name.toLowerCase()))
      if(recherche.length>0 && this.search.length>0)
      {
        this.menu=true;
        this.tous=recherche;
        Swal.fire({
          title:"resultat <span class='font-bold text-gray-400'>"+recherche.length + "</span> pays",
          showCancelButton:false,
          showDenyButton:false,
          showConfirmButton:false,
          timerProgressBar:true,
          timer:1000,
          toast:true,
          position:"top-end",
          icon:"sucess"
        })
      }
      else{
        this.menu=false;
        this.corps=false;
        this.tous=[];
        Swal.fire({
          title:"aucun trouve",
          showCancelButton:false,
          showDenyButton:false,
          showConfirmButton:false,
          timerProgressBar:true,
          timer:1000,
          toast:true,
          position:"top-end",
          icon:"error"
        })

      }
      
      
    }
  },

  data () {
    return {
      search:"",
      corps:false,
      mitady:"",
      tous:"",
      menu:false,
      name:'',
    }
  },
mounted() {
  const route=useRoute();
  this.name=route.name;
 
},
}
</script>