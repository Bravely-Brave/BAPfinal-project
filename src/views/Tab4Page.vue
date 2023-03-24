<template lang="">
  <ion-page>
  <ion-content :fullscreen="true">

<h1>Votre Portefeuille</h1>

<div class="header">
  <div class="carte" @click="showCard"><p>Carte</p></div>
  <div class="wallet" @click="hideCard"><p>Portefeuille</p></div>
</div>

<div class="allCard">
    <img class="click" src="/assets/images/powerWallet.png" alt="" >
    <img src="/assets/images/graineCard.png" alt="">
    <img src="/assets/images/heraultCard.png" alt="">
</div>

  
<div class="card none">

            <h2 class="clientCard"> Carte Client</h2>
            <h3 class="cardName">Détresse Oumille</h3>
            <section class="cardContent">
              <div>
                <img class="theCard" src="/assets/images/cartefidelite.png" alt="">
              </div>
                <div class="cardInfo">
                    <div class="store">
                        <p class="title">Carte</p>
                        <h6 class="nameStore">Maison L'herault</h6>
                    </div>
                    <div class="cardNumber">
                        <p class="clientNumber">Numéro client</p>
                        <h6 class="titleColor">09875</h6>
                    </div>
                </div>
            </section>
            <section class="points">
                <p class="cagnotte">Ma cangnotte</p>
                <div class="center">
                    <div class="hundred">
                        <p class="pointsNumber">100 Points</p>
                    </div>
                </div>
                <p class="pros">Vos avantages fidélité</p>
                <div class="rulesCenter">
                    <div class="rules">
                        <h5>1€ dépensé = 1 point gagné</h5>
                        <p class="settings">Bénéficier d'une remise immédiate au bout de 100 points obtenu</p>
                    </div>
                </div>
                <div class="deleting">
                    <img src="/assets/images/bin.png" alt="">
                    <p class="delete">Supprimer la carte</p>
                </div>
            </section>
          </div>

</ion-content>
</ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

  export default {

    methods:{
      showCard(){
             const old = document.querySelector(".wallet")
        const loyalty = document.querySelector(".card")
        const title = document.querySelector(".carte")
        loyalty.classList.toggle("none")
        loyalty.classList.toggle("block")
        old.classList.remove("orange")
        title.classList.add("orange")
        title.style.color= "#F78114"
        title.style.borderBottomColor= "#F78114"
        title.style.borderRadius= "#20px"
        old.style.color= "#939393"
        old.style.borderBottomColor= "#FFFFFF"
        old.style.borderRadius= "#20px"
      },
      hideCard(){
        const old = document.querySelector(".carte")
        const loyalty = document.querySelector(".card")
        const title = document.querySelector(".wallet")
        loyalty.classList.toggle("none")
        loyalty.classList.toggle("block")
        title.classList.add("orange")
        old.classList.remove("orange")
        old.style.color= "#939393"
        old.style.borderBottomColor= "#FFFFFF"
        old.style.borderRadius= "#20px"
        title.style.color= "#F78114"
        title.style.borderBottomColor= "#F78114"
        title.style.borderRadius= "#20px"
      }

    }
  }
</script>
<style >
*{
  font-family: 'Montserrat', sans-serif;
}
h1{
  color: #2543A0;
  padding-left: 20px;
  padding-top: 50px;
}
.header{
  display: flex; 
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
}
.orange{
  color: #F78114;
  border-bottom:5px  solid #F78114;
}
.carte{
  padding-left: 20px; 
   font-size: 20px;
  color: #939393;
  border-bottom: 5px white solid;
}
.wallet{
  padding-left: 20px;
  font-size: 20px;
  color: #939393;
  border-bottom: 5px white solid;
}
.none{
  display:none;
}
.theCard{
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 150px; */

}
.card{
  position: absolute;
    top: 190px;
    background-color: white;
    width: 100%;
  }
  .lastname{
    color: #2543A0;
    font-weight: 700;
    font-size: 17px;
  }
  .creation{
    color: #939393;
  }
  .date{
    color: #F78114;
    font-weight: 400;
  }
  .number{
    color: #F78114;
    font-weight: 400;
  }
  .button{
    color: white;
  }

  .cross{
    margin-left: 300px;
    margin-top: 20px;
  }

  .clientCard{
    padding-left: 20px;
    color: #2543A0;
  }

  .cardName{
    padding-left: 20px;
    font-size: 20px;
    color: #F78114;
}

.cardContent{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.store{
    text-align: center;
}
  .cardNumber{
    text-align: center;
    border: 2px #EEF2FF solid;
    border-radius: 15px;
    width: 135px;
  }
  .allCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    
  }
  .title{
    margin-bottom: -12px;
    color: #939393;
  }
  .titleColor{
    color: #939393;
  }
  .clientNumber{
    margin-bottom: -10px;
    color: #2543A0;
  }
  .cagnotte{
    padding-left: 20px;
    padding-top: 20px;
    color: #2543A0;
  }
  .hundred{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border: 5px #EEF2FF solid;
    border-radius: 20px;
    width: 250px;
    height: 65px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pros{
    margin-left: 20px;
    color: #2543A0;
    padding-bottom: 20px;
  }
  .rules{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    width: 325px;
    background-color: #FFF4E9;
  }
  .rulesCenter{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .deleting{
    display: flex;
    margin-left: 20px;
    margin-top: 30px;
    width: 320px;
    gap: 20px;
    align-items: center;
    padding: 5px 5px 5px 20px;
    border: 3px #EEF2FF solid;
    border-radius: 15px;
    height: 50px;
    margin-bottom: 20px;
    color: #2543A0;
    cursor: pointer;
  }
  .nameStore{
    color: #2543A0;
  }
  .pointsNumber{
    color: #F78114;
  }
  h5{
    color: #F78114;
  }
  .settings{
    color: #939393;
    width: 262px;
    text-align: center;
  }
</style>