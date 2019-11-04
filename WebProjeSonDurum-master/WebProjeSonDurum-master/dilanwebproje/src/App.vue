
<template>

  <div id="app">

    <div v-show="this.sayfa == 'mainpage'">
    <Header />

    <Menu/>
    <div v-show="this.sayfa2 == 'slider'">
      <Slider />
    </div>

    <div v-show="this.sayfa2 == 'uye'">
      <GirisYap />
    </div>
   
    <Footer/>

    </div>


    <div >
      <Sepet v-show="this.sayfa == 'sepetim'"/>
    </div>

    
    
    
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Slider from './components/Slider.vue'
import Footer from './components/Footer.vue'
import GirisYap from './components/GirisYap.vue'
import Sepet from './components/Sepet.vue'

import { eBus, eBus2, eBus3 } from './main'


export default {
  name: 'app',
  components: {
   Header,
   Menu,
   Slider,
   Footer,
   Sepet,
   GirisYap
   
  },
  
  methods:{
    sakla(){
      this.giris = true;
    }
  },

  data(){
    return{
      sayfa : 'mainpage',
      sayfa2 : 'slider'
    }
  },
  created(){
    eBus.$on('sepeteGitme',(data) => {
      this.sayfa = data
    })
    eBus2.$on('geriDonme',(data) => {
      this.sayfa = data
    }) 
    eBus3.$on('sayfaDegisti',(data)=>{

      this.sayfa2=data
    }) 
  }
}
</script>

<style>


</style>
