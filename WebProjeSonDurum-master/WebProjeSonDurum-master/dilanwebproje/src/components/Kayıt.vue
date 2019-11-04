<template>

<div class="main">
<div class="form_container">
    <!------------------------GOOGLE VE FACEBOOK BUTONLARI--------------------------------------->
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
<div>
     <p style="position:absolute;top:130px;left:220px; font-size:13px;"> VEYA</p>
</div>

<!-------------------EN ALT KISIMDAKİ KAYIT OL ŞARTLARI VS.---------------------------->
<div class="kayit_ol_sartlari">
<p>
Kayıt Ol diyerek
<a href="#" class="link" style="color:rgb(53, 150, 181;">
    Kahve Dünyası'nın Üyelik Koşulları</a>
    ve
    <a href="#" class="link" style="color:rgb(53, 150, 181;">
        Gizlilik Şartlarını
         'nı kabul etmiş oluyorsunuz
    </a>
</p>
</div>

<!-------------------------------KAYIT OL BUTONU------------------------->
 <div class="kayitol_btn_container">
   <button  @click.prevent="kayit_uyari" type="submit" class="kayitol_btn">KAYIT OL</button>
   
  </div>
<!----------------------En alttaki hesabınız var mı link?----------------->
<div class="hesabin_var_mi"> 
<p> Zaten Hesabınız var mı?
    <a href ="/uye.girisi" class="link"  style="color:rgb(53, 150, 181;">Giris Yapın </a>
</p>
</div>




<form >

<!-------------------İnput alanları ve tipleri belirlendi------------------------->
<div class="inputlara_ait_container">

       <div   class="inputBox" >
       <input v-model="text" type="text"  name="username">
       <label style="top:82px">Ad Soyad</label>
       </div>
 <p style="color:red;font-size:10px; position:absolute;left:1px;top:50px;" v-show="!bilgi_girildi_mi">*Ad soyad gerekmektedir.</p>
      <div  class="inputBox" >
       <input  v-model="email"  type="email"  >
       <label  style="top:172px" >E-Posta</label>
       </div> 
 <p style="color:red;font-size:10px; position:absolute;left:1px;top:140px;" v-show="!bilgi_girildi_mi">*E-postanızı belirtmelisiniz.</p>

        <div class="inputBox">
       <input   v-model="tel"  type="tel" > 
       <label  style="top:262px">Cep Telefonu</label>
       </div>
  <p style="color:red;font-size:10px; position:absolute;left:1px;top:230px;" v-show="!bilgi_girildi_mi">*Geçerli bir telefon numarası belirtmelisiniz..</p>

       <div class="inputBox">
       <input  v-model="pass"  type="password"  >
       <label  style="top:352px">Parola</label>
       </div>
  <p style="color:red;font-size:10px; position:absolute;left:1px;top:320px;" v-show="!bilgi_girildi_mi">*Şifrenizi belirtmelisiniz..</p>
        
       </div>
</form>
</div>   
</div> 
</template>

<script>
export default {
    data(){
      return{
       bilgi_girildi_mi:true,
        text: '',
        email: '',
        tel:'',
        pass: ''
      }
    },
     methods:{
       kayit_uyari()
       {
         if (this.email == '' || this.pass == '' || this.text == '' || this.tel == ''){
            this.bilgi_girildi_mi = false;
         }
       }
       
     }
}


</script>



<style scoped>
.main{
  background-image: url("../assets/kayit_ol_arka_plan.png");
  width: 1910px;
  height: 800px;
}

.body
{
    margin:0;
    padding:0;
    font-family: 'Courier New', Courier, monospace;
}

/*FACEBOOK VE GOOGLE BUTONLARI  */
.google_ile_giris_yap
{
  text-decoration: none;
  color:black;
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
  right:50px;
  top:40px;
  box-shadow: 0 0px px ;
}
/*facebook butonu style özellikleri */
.btn-facebook {
   color: black;
  background-color:rgb(52, 52, 126);
  width:150px;
  height:80px;
  left:80px;
  position:absolute;
  top:40px;
  box-shadow: 0 0px 0px;
}
.btn-facebook :hover
{
    background-color:rgb(50, 50, 117);
}
/***********CHECKBOX TANIMI*************************************************** */ 

/*********************************************************************************************************************************/
.form_container /*girişyap kısmının genel olarak içine alındığı class*/
{
position:absolute;
top:50%;
left:50%;
transform: translate(-50% ,-50%);/*html elemanlarını döndürmek,boyutlandırmak,eğmek için kullanılır*/
 /* 50px aşağıya 40px sağa öteler*/ 
  width:470px;
  height:750px;
  background:white;
box-sizing: border-box;
box-shadow: 0px 0px 1px black;/*Kutulara gölge verebilmek için box-shadow kullanılır */
border-radius:0px;
}
.inputlara_ait_container
{
 position:absolute;
 left:100px;
top:180px;
 border:1px solid white;
 width:270px;
 height:200px;
}
.form_container.inputbox
{
    position:relative;
}

.form_container .inputBox input /*girdi alacak kısımlar için */
{
    width:100%;
    padding:15px;
    font-size:15px;
    color:black;
    outline:none; /*kenardaki mavi çizgilerin silinmesini sağladı */
    margin-bottom:40px; /*input kutuları arası boşluk bıraktı */
    border:2px solid  rgb(185, 185, 185); /*ilk baştaki px değeri border kalınlığını belirledi.*/
    background:transparent;
    
   
}

.form_container .inputBox label
{
  position: absolute;
padding:0px 0px;
left:2px;
margin-top:-75px;

}
/* focus özelliği:fare ile nesne üzerine gelindiğinde özellik değiştirir fakat fare çekildiğinde tekrar eski haline gelir*/ 
.form_container .inputBox input:focus ~ label,
.form-container .inputBox:valid ~ label
{
  left:0;
  color: rgb(168, 168, 168);
  font-size:12px;
}
/*------------------------------------------*/ 
.kayit_ol_sartlari
{
    position:absolute;
    bottom:120px;
    font-size: 14px;
}
.kayit_ol_sartlari  :hover
{
    text-decoration:none;
}
/*KAYIT OL BUTONU İÇİN CSS*/
.kayitol_btn
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
  box-shadow: 0px 0px 0px #096361;
  color:white;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.kayitol_btn_container
{
  position:absolute;
  bottom:45px;
  left:80px;
}
.kayitol_btn:hover
{
  background-color:#096361;
  outline:none;
}
.hesabin_var_mi /*giriş yapın linki */
{
    position:absolute;
    bottom:0;
    left:120px;
     font-size: 13px;
}
.hesabin_var_mi :hover
{
     text-decoration:none;
}

</style>