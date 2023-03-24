<template>


    <ion-page>
      <ion-content>
  
        <ion-image><img class="compte" src="./compte.png" alt=""></ion-image>
        <ion-paragraph class="title1">Compte</ion-paragraph>
        <ion-paragraph class="note">* Champs obligatoires</ion-paragraph>
  
  <div class="civi">
    <ion-label>Civilité *</ion-label></div>
  
    <div class= "check">
  
  <label>
    <input type="checkbox" name="gender" value="Madame">
    Madame
  </label>
  
  
  <label>
    <input type="checkbox" name="gender" value="Monsieur">
    Monsieur
  </label>
  
  <label>
    <input type="checkbox" name="gender" value="Autre">
    Autre
  </label>
  </div>
  
  
     <ion-form>
  
      <div class="forms">
      <ion-item fill="outline">
        <ion-label position="floating">Prénom *</ion-label>
        <ion-input v-model="name" placeholder="Entrer votre prénom"></ion-input>
      </ion-item>
  
      <ion-item fill="outline">
        <ion-label position="floating">Nom *</ion-label>
        <ion-input v-model="lastname" placeholder="Entrer votre nom"></ion-input>
      </ion-item>
  
      <ion-item fill="outline">
        <ion-label position="floating">N° de téléphone *</ion-label>
        <ion-input type="number" v-model="number" placeholder="Entrer votre numéro"></ion-input>
      </ion-item>
  
      <ion-item fill="outline">
        <ion-label position="floating">E-mail *</ion-label>
        <ion-input type="email" v-model="email" placeholder="Entrer votre email"></ion-input>
      </ion-item>
  
      <ion-item fill="outline">
        
        
        <ion-label position="floating">Mot de passe *</ion-label>
        
        <div class="oeil">
        <ion-input type="password" v-model="password" placeholder="Entrer votre mot de passe"></ion-input>
                                               
        <img @click="toggleShowPassword"  class="close" src="./oeil.png" alt="">
  
        <img class="open" @click="toggleShowPassword"  src="./close.png" alt="">
      </div>
        
        
      </ion-item >
  
      
      
      <div class="mdp">
              <p>Doit contenir : 1 majuscule, 1 chiffre et 1 caractère spécial</p>
    
        </div>
  
      
    
    </div>
  
    <div class="offre">
      <p>J’accepte de recevoir les offres et réductions: *</p>
    
    </div>
  
    <div class="yesemail">
  
      <p>Par Email</p>
      <label>
      <input type="checkbox" value="yes">
     Oui
    </label>
    <label>
      <input type="checkbox" value="no">
      Non
    </label>
    </div>
  
    <div class="yessms">
  
  <p>Par SMS</p>
  <label>
  <input type="checkbox" value="yes">
  Oui
  </label>
  <label>
  <input type="checkbox" value="no">
  Non
  </label>
  </div>
  
  <div class="anto">
    <label>
  <input type="checkbox" value="no">
  Je suis un/e habitant/e d’Antony
  </label>
  
  </div>
  <a  class="submit" href="/tabs/Tab1"> Créer mon Compte </a>
  
    </ion-form>
  
  
  
      </ion-content>
    </ion-page>
   
    
  
  
    </template>
  
  
  <script>
  
  import { mapMutations } from 'vuex';
    export default {
      data() {
        return {
          name: '',
          email: '',
          number:'',
          message: '',
          showPassword: false,
        };
      },
      methods: {

        // décompose le tableau setFormData mais pas besoin pour le moment
       // ...mapMutations(['setFormData']),
      submitForm() {
     
    
        this.setFormData({
          name: this.name,
          email: this.email,
          number: this.number,
          message: this.message,
        });

      
      
 
          if (!this.validatePassword()) {
            alert("Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial");
            return;
          }


  
        },

        // oeil 
        toggleShowPassword() {
          const passwordInput = document.querySelector('input[type="password"]');
          const openEye = document.querySelector('.open');
          const closeEye = document.querySelector('.close');
          if (this.showPassword) {
            passwordInput.type = 'password';
            openEye.style.display = 'block';
            closeEye.style.display = 'none';
          }  else if(!this.showPassword) {
            passwordInput.type = 'text';
            openEye.style.display = 'none';
            closeEye.style.display = 'block';
          }
          this.showPassword = !this.showPassword;
        },
        validatePassword() {
          const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
          return passwordRegex.test(this.message);
        }
      }
    };
  </script>
  
  
  <style>
  *{
  font-family: 'Montserrat', sans-serif;
}
  .compte{
    width: 100%;
    
  }
  
  .title1{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2543A0;
    font-size: 32px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .note{
    color: #2543A0;
    font-size: 12px;
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
  
  }
  
  ion-item{
    color: #2543A0;
  }
  
  
  .civi{
    color: #2543A0;
    margin-top: 20px;
    margin-left:20px;
  }
  
  .check{
    color: #676767;
    display:flex;
    gap:30px;
    margin-top:20px;
    margin-left:20px;
    
  }
  
  .mdp{
    color:#2543A0;
    font-size:10px;
    margin-left:20px;
  }
  
  .input{
  
    border-radius: 10px;
  }
  
  .forms{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  
  
  
  .oeil{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 97px;
  }
  
  .open{
    display: block;
    padding-left: 10px;
    width: 30px;
    height: 10px;
  }
  
  
  .close{
    display: none;
    
  }
  
  .yesemail{
    color: #2543A0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid #2543A0;
    border-radius: 12px;
    height: 35px;
  
  }
  
  .yessms{
    color: #2543A0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid #2543A0;
    border-radius: 12px;
    height: 35px;
    margin-top: 10px;
  
  }
  
  .offre{
    color:#2543A0;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 520;
    
  }
  
  .anto{
    color: #2543A0;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 20px;
  }
  
  .submit{
  
    display: flex;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
    height: 40px;
    width: 200px;
    background-color: #2543A0;
    align-items: center;
    border-radius: 20px;
    margin-left: 25%;
    margin-right: 25%;
    text-decoration: none;
    color: white;
  }
  
  
  
  
  
  </style>