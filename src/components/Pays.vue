<template>
    <div>
       <div class="media">
        <div class="col-span-4 py-4 px-6">
            <div class="bg-gray-400 rounded-t-2xl text-center py-2">
                <p class="comic font-bold text-white ">{{ tous.name }} </p>
            </div>
            <div class="py-2 px-4 flex justify-between">
              <div>
                <span class="text-gray-400 font-bold">Airport </span>
              </div>
              <div class="flex justify-center items-center h-4 w-4 rounded-full bg-gray-400">
                  <span class="text-white font-bold">{{ port.length }} </span>
              </div>
            </div>
            <div class="py-2 px-4 flex justify-between">
              <div>
                <span class="text-gray-400 font-bold">Universite </span>
              </div>
              <div class="flex justify-center items-center h-6 w-6 rounded-full bg-gray-400">
                  <span class="text-white font-bold px-2 py-1">{{ Univer.length }} </span>
              </div>
            </div>
           <div
           data-aos="fade-left"
           data-aos-delay="500"
           data-aos-duration="800"
            class="py-10 px-2" :class="menu?'':'hidden'" v-for="(top,lacle) in tops " :key="lacle">
                <div class="bg-amber-400 rounded-t-2xl text-center py-2">
                    <div class="flex justify-end  px-4">
                      <button
                      @click.prevent="manala(lacle)" 
                      class="fas fa-window-close text-gray-400 hover:text-white scale-12">

                      </button>
                    </div>
                    <p class="comic font-bold text-white ">{{ top.name }} </p>

                </div>
                <div class="flex justify-start px-4 py-2 ">
                      <span class="text-blue-400 font-bold px-2 py-1">Pays </span>
                      <span class="text-blue-400 font-bold px-2 py-1">{{ top.country }} </span>
                  </div>
                  <div class="flex justify-start px-4 py-2 ">
                      <span class="text-blue-400 font-bold px-2 py-1">Code </span>
                      <span class=" font-bold px-2 py-1 text-comic text-blue-400">{{ top.alpha_two_code }} </span>
                  </div>
                  <div class="space-x-4 rounded-b-2xl px-4 py-2 bg-gray-400">
                      <span class="text-white font-bold px-2 py-1">Site web </span>
                      <a :href="top.web_pages[0]" class=" font-bold px-2 py-1 text-white">{{ top.web_pages[0] }} </a>
                  </div>
           </div>
           <div
           data-aos="fade-left"
           data-aos-delay="500"
           data-aos-duration="800"
           class="py-10 px-2" :class="slide?'':'hidden'" v-for="(air,cle1) in parting " :key="cle1">
                <div class="bg-amber-400 rounded-t-2xl text-center py-2">
                    <div class="flex justify-end  px-4">
                      <button
                      @click.prevent="manalagy(cle1)" 
                      class="fas fa-window-close text-gray-400 hover:text-white scale-12">

                      </button>
                    </div>
                    <p class="comic font-bold text-white ">{{ air.name }} </p>

                </div>
                <div class="flex justify-end px-4 py-2 ">
                      <span class="text-blue-400 font-bold px-2 py-1">CODE </span>
                      <span class=" font-bold px-2 py-1 text-comic text-blue-400">{{ air.iata_code }} </span>
                  </div>
                <div class="flex justify-start px-4 py-2 ">
                      <span class="text-blue-400 font-bold px-2 py-1">Pays </span>
                      <span class="text-blue-400 font-bold px-2 py-1">{{ air.country }} </span>
                  </div>
                  <div class="flex justify-start px-4 py-2 ">
                      <span class="text-blue-400 font-bold px-2 py-1">ville </span>
                      <span class=" font-bold px-2 py-1 text-comic text-blue-400">{{ air.city }} </span>
                  </div>
                  <div class="flex justify-start px-4 py-2 ">
                      <span class="text-blue-400 font-bold px-2 py-1">ID CLE </span>
                      <span class=" font-bold px-2 py-1 text-comic text-blue-400">{{ air.objectID }} </span>
                  </div>
                  
           </div>
        </div>
        <div class="col-span-4 px-5 py-4 border-l-4 border-gray-400 ">
            <h1 class="comic text-right text-gray-400 font-bold">{{ tous.name }} </h1>
            <ul class="px-5 py-2 space-y-4">
                <li class="space-x-2">
                  <span class="text-gray-400 comic font-bold">Continent </span>
                  <span class="underline text-violet-400 font-bold comic">{{ tous.region}} </span>
                </li>
                <li class="space-x-2">
                  <span class="text-gray-400 comic font-bold">Position continental  </span>
                  <span class="underline text-violet-400 font-bold comic">{{ tous.subregion}} </span>
                </li>
                <li class="space-x-2">
                  <span class="text-gray-400 comic font-bold">Ville </span>
                  <span class="underline text-violet-400 font-bold comic">{{ tous.capital }} </span>
                </li>
                <li class="space-x-2">
                  <span class="text-gray-400 comic font-bold">Nom d'origine </span>
                  <span class="underline text-violet-400 font-bold comic">{{ tous.nativeName}} </span>
                </li>
                <li class="space-x-2">
                  <span class="text-gray-400 comic font-bold">Surface </span>
                  <span class="underline text-violet-400 font-bold comic">{{ tous.area}} <span class="text-sm">Km/2</span></span>
                </li>
                <li class="space-x-2">
                  <span class="text-gray-400 comic font-bold">Habitants </span>
                  <span class="underline text-violet-400 font-bold comic">{{ tous.population}} </span>
                </li>
                <li class="space-x-2">
                  <span class="text-gray-400 comic font-bold">Argent </span>
                  <div class="space-x-4" v-for="(argent,ar) in tous.currencies" :key="ar">
                      <p class="text-amber-400 font-bold space-x-4"><span class="underline">Name</span><span class="">{{ argent.name }} </span> </p>
                      <p class="text-amber-400 font-bold space-x-4"><span class="underline">Code</span><span class="">{{ argent.code }} </span> </p>
                      <p class="text-amber-400 font-bold space-x-4"><span class="underline">Symbol</span><span class="">{{ argent.symbol }} </span> </p>
                  </div>
                </li>
                <li class="space-x-2 py-2">
                  <span class="text-gray-400 comic font-bold underline py-2">Traduction langage </span>
                  <div class="space-x-4" v-for="(langue,trans) in tous.translations" :key="trans">
                      <p class="text-zinc-400 font-bold space-x-4"><span class="underline">{{ trans }}../ </span><span class="">{{ langue }} </span> </p>
                  </div>
                </li>
                
            </ul>
        </div>
        <div class="col-span-4 px-6">
          <div class="px-2 py-3">
            <div class="bg-gray-400 rounded-t-2xl text-center py-2">
                <p class="comic font-bold text-white ">{{ Univer.length }} Universite de {{ tous.name }} </p>
            </div>
            <div  class="px-4 h-[250px] overflow-hidden overflow-y-auto y">
              <div 
              @click.prevent="versite(site.name) "
              class="space-x-2 cursor-pointer flex justify-start space-x-3  text-blue-400 font-bold comic space-y-3 items-center" v-for="(site,index) in Univer " :key="index" >
                  <span class="fas fa-award"></span>
                  <span>{{ site.name }} </span>
              </div>
            </div>
          </div>
          <div class="px-2 py-3">
            <div class="bg-gray-400 rounded-t-2xl text-center py-2">
                <p class="comic font-bold text-white ">{{ port.length}} airport de {{ tous.name }} </p>
            </div>
            <div  class="px-4 h-[250px] overflow-hidden overflow-y-auto y">
              <div
              @click.prevent="portion(value.name)" 
              class="space-x-2 flex justify-start space-x-3 cursor-pointer  text-blue-400 font-bold comic space-y-3 items-center" v-for="(value,cle) in port " :key="cle" >
                  <span class="fas fa-plane-departure"></span>
                  <span>{{ value.name }} </span>
                  <span class="underline text-violet-400">{{ value.city }} </span>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
</template>
<script>
import Swal from "sweetalert2"
import { useRoute } from 'vue-router'
import Monde from "../json/Monde.json"
import University from "../json/University"
import Air from "../json/airports.json"
export default {
  props: {
  },
  watch: {
  },
  props: {
  },
  created () {
  },
  methods: {
    portion(name)
    {
      this.menu=false;
      this.slide=true;
      let vera = Air.find(item=>item.name===name);
      if(this.slide)
      {
        this.parting.push(vera)
        Swal.fire({
          title:"ajouter <span class='underline text-gray-400'>"+vera.name+"</span> liste",
          toast:true,
          showCancelButton:false,
          showDenyButton:false,
          showConfirmButton:false,
          timerProgressBar:true,
          timer:1000,
          toast:true,
          position:"top-end",
          icon:"success"
        })
      }
      else{
        this.parting=[];
      }
    },
    manalagy(index){
      this.parting.splice(index,1);
      Swal.fire({
          title:"retire un liste airport",
          toast:true,
          showCancelButton:false,
          showDenyButton:false,
          showConfirmButton:false,
          timerProgressBar:true,
          timer:1000,
          toast:true,
          position:"top-end",
          icon:"success"
        })
    },
    manala(index){
      this.tops.splice(index,1);
      Swal.fire({
          title:"retire un liste universite",
          toast:true,
          showCancelButton:false,
          showDenyButton:false,
          showConfirmButton:false,
          timerProgressBar:true,
          timer:1000,
          toast:true,
          position:"top-end",
          icon:"success"
        })
    },
    versite(index)
    {
      this.menu=true
      this.slide=false
      let vera = University.find(item=>item.name===index)
      
      if(this.menu)
      {
        this.tops.push(vera);
        Swal.fire({
          title:"ajouter <span class='underline text-gray-400'>"+vera.name+"</span> liste",
          toast:true,
          showCancelButton:false,
          showDenyButton:false,
          showConfirmButton:false,
          timerProgressBar:true,
          timer:1000,
          toast:true,
          position:"top-end",
          icon:"success"
        })

      }
      else{
        this.tops=[];
      }
    }
  },
  setup() {
    let route = useRoute()
    let tous =Monde.find(item=>route.params.name===item.name)
    let Univer= University.filter(item=>item.country===tous.name)
    let Airport =Air.filter(item=>item.country===tous.name)
    let Airport1=Air.filter(item=>item.city===tous.capital)
    let port=Airport.length>0?Airport:Airport
    return {
        tous,port,Univer
    }
  },
  data () {
    return {
      menu:false,
      slide:false,
      tops:[],
      parting:[],
    }
  },
    name:"payss",
    
}
</script>