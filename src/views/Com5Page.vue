<template >
    <ion-page>
  <ion-content :fullscreen="true">
    <h1>Favoris</h1>

    <p>Trouver vos commerces favoris tout prèt de chez vous</p>
    
    <div class="myFavs" >
        <div class="favShop">
            <img class="herault" src="/assets/images/heraultFav.png" alt="">
            <img class="graine" src="/assets/images/graineFav.png" alt="">
        </div>
        <img class="saigon" src="/assets/images/saigonFav.png" @click="unFav" alt="">
    </div>
  </ion-content>
  </ion-page>
  </template>
  <script >
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
export default {
  methods :{
    unFav(){
        const pic = document.querySelector(".saigon")
        pic.classList.toggle("none")
    }
  }
}
  </script>
  <style >
  *{
  font-family: 'Montserrat', sans-serif;
}
  h1{
    padding-left: 20px;
    color: #2543A0; 
    padding-top: 50px;
  }

  p{
    padding-left: 20px;
    color: #939393 ;
    padding-top: 25px;
  }

  .favShop{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .saigon{
    margin-left: 20px;
    margin-top: 20px;
  }

  .myFavs{
    padding-top: 50px;
  }

  .none{
    display: none;
  }
  </style>