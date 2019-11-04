
<template>
<div class="main">

  <div class="form-container">
    <form  >
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!--Bu kısımda google ve facebook butonları ile giriş ekranlarına gidilebilmesi için butonlra uygun linkler verildi.-->

    <div>
      <button class="btn btn-lg btn-google btn-block text-uppercase" type="button"  >
      <a class="google_ile_giris_yap" href="https://www.youtube.com/watch?v=O7Odv-tQUP0"  ><strong>Google ile <br>giriş yap.  </strong> </a>
      <img src="../assets/google.png" class="google_resim">
    </button>
    </div>

    <div>
    <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="button"  > 
    <a class="facebook_ile_giris_yap" href="https://www.youtube.com/watch?v=O7Odv-tQUP0" ><strong>Facebook ile <br> giriş yap.  </strong> </a>
    <img src="../assets/facebook.png" class="facebook_resim">
    </button>
    </div>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    <p style="position:absolute;top:120px;left:200px; font-size:13px;"> VEYA</p>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    <div class="inputlara_ait_container">
      <!---REQUİRED:FORM GÖNDERİLMEDEN GİRİŞ ALANININ DOLDURULMASI GEREKTİĞİNİ SÖYLER.kaldırıldığında uyarı mesajı vermez-->
      <div class="inputBox"> 
        <input v-model="email" type="text" name="username" >
        <label style="position:absolute;top:-10px;">E-Posta</label>           
      </div>
      <p style="color:red;font-size:10px; position:absolute;left:1px;top:50px;" v-show="!eposta_girildi_mi">*E-postanızı belirtmelisiniz.</p>
    <!--Password type:kullanıcıların güvenli bir şekilde şifre girişini sağlar-->
    <!--Password type:password yerine text olsaydı şifre noktalı gözükmek yerine açık açık gözükecekti-->
      <div class="inputBox"> 
        <!--minimum 8 karakter olabilir-->
        <input v-model="pass" type="password" minlength="8"  />
        <label style="position:absolute;top:-10px;">Parola</label>
      </div> 
        <p style="color:red;font-size:10px; position:absolute;left:1px;top:145px;" v-show="!eposta_girildi_mi">*Şifrenizi belirtmelisiniz.</p>
    </div>
    <!--------------------------TOGGLE YAPIMI BAŞLANGIÇ---------------------------------------->

    <!----------------------------TOGGLE BİTİŞ--------------------------------------------------------->


    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    <a  href="https://www.kahvedunyasi.com/sifremi-unuttum"  style="position:absolute;bottom:170px; float:left;text-decoration:underline;left:73px;">Parolanızı mı unuttunuz?</a>

      <div class="girisyap_btn_container">
      <button @click.prevent="eposta_uyari"  type="submit" class="girisyap_btn">GİRİŞ YAP</button>
      </div>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="hesabınız_yok_mu">
            <p>
                Hesabınız yok mu ?
              <a href="#" class="link" @click="giris"  style="text-decoration:underline;">Kayıt Ol</a>
              </p>
      </div>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    </form>
  </div>
</div>
</template>

<script>
import { eBus4 } from '../main'
export default {
    data(){
      return{
        eposta_girildi_mi : true,
     
        email: '',
        pass: ''
      }
    },
     methods:{
       eposta_uyari()
       {
         if (this.email == '' || this.pass == ''){
            this.eposta_girildi_mi = false;
         }
       },
        kayitol(){
            eBus4.$emit('kayitOl', 'kayıt')
        }
       
       
     }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.main{
  background-image: url("../assets/kahve_cekirdegi.png");
  width:1600;
  height: 800px;
  position: relative;
  top:320px;
}

body
{
margin:0;
padding:0;
font-family:sans-serif;
}
.google_ile_giris_yap
{
  text-decoration: none;
  color:black;
  font-size:10px;
}
.google_resim
{
  position:absolute;
  top:15px;
  left:0px;
}
.facebook_ile_giris_yap
{
  text-decoration: none;
  color:white;
   font-size:10px;
   border-radius:0px;
}
.facebook_resim
{  position:absolute;
  top:15px;
  left:0px; 
}

.btn-google {
  color: black;
  background-color:white;
  width:150px;
  height:80px;
  position:absolute;
  right:40px;
  top:20px;
  box-shadow: 0 0px 1px black;
}
/*facebook butonu style özellikleri */
.btn-facebook {
   color: black;
  background-color:rgb(47, 47, 122);
  width:150px;
  height:80px;
  left:70px;
  position:absolute;
  top:20px;
  box-shadow: 0 0px 1px black;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container /*girişyap kısmının genel olarak içine alındığı class*/
{
  position:absolute;
  top:335px;
  left:950px;
  transform:translate(-50%,-40%); /*html elemanlarını döndürmek,boyutlandırmak,eğmek için kullanılır*/ 
 /* 50px aşağıya 40px sağa öteler*/ 
  width:450px;
  height:560px;
  background:white;
box-sizing: border-box;


}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.inputlara_ait_container
{
 position:absolute;
 left:100px;
top:180px;
 border:1px solid white;
 width:270px;
 height:200px;

}

/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container .inputBox /*eposta veparolanın'un konumunu ayarlar*/ 
{
  position:relative;
 
  
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container .inputBox input
{
width:100%;
height:25px;
font-size:16px;
padding:20px 0;
margin-bottom: 30px;
border:none;
background:white;
outline:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container  .inputBox label
{
  position:absolute;
  text-align:initial; /* parola ve e posta yazılarını başlangıç kısmına sabitle*/ 
  top:0;
  left:0;
 padding: 20px; /*e posta ve parola inputu için alan genişletme*/ 
  width:230px;
  font-size:16px;
  color:rgb(168, 168, 168);
  pointer-events:none;
  transition: .5s;
  border:1px solid rgb(168, 168, 168);
 
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
/* focus özelliği:fare ile nesne üzerine gelindiğinde özellik değiştirir fakat fare çekildiğinde tekrar eski haline gelir*/ 
.form-container .inputBox input:focus ~ label,
.form-container .inputBox:valid ~ label /*valid :kullanıcının girdileri ile eposta ve parola yazılarının üst üste gelmesini engeller.Kaldırıldığında yazılar üst üste gelir*/ 
{

  left:0;
  color: rgb(168, 168, 168);
  font-size:12px;

}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn
{
  font-size: 13px;
  font-family: sans-serif;
  padding: 20px ;
  width: 280px;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  background-color:#005e5c;
  outline:none;
  border-color:#005e5c; /*borderın kenarlarının renk değişikliği*/
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn_container
{
  position:absolute;
  bottom:85px;
  left:80px;
}
.girisyap_btn:hover
{
  background-color:#096361;
  outline:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.parolanızımı_unuttunuz_container
{
  position:absolute;
  left:0px;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn:hover
{
  background-color:#096361;
  outline:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.hesabınız_yok_mu
{
  position:absolute;
  bottom:9px;
 left:130px;

}


</style>
