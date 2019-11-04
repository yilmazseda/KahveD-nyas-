
<template>

  <div id="app">

    <p>Hello Worl </p>

    <div v-show="this.sayfa == 'mainpage'">
    <Header />

    <Menu/>
    <div v-show="this.sayfa2 == 'slider'">
      <Slider />
    </div>

    <div v-show="this.sayfa2 == 'uye'">
      <GirisYap />
    </div>

    <div v-show="this.sayfa3=='kayıt'">
       <Kayıt/>
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
import Kayıt from './components/Kayıt.vue'

import { eBus, eBus2, eBus3,eBus4 } from './main'


export default {
  name: 'app',
  components: {
   Header,
   Menu,
   Slider,
   Footer,
   Sepet,
   GirisYap,
   Kayıt
   
  },
  
  methods:{
    sakla(){
      this.giris = true;
      this.Kayıt=true;
    }
  },

  data(){
    return{
      sayfa : 'mainpage',
      sayfa2 : 'slider',
      sayfa3:'kayıtsayfa'
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
     eBus4.$on('kayitOl',(data)=>{

      this.sayfa3=data
  })
}
}
</script>

<style>


</style>
