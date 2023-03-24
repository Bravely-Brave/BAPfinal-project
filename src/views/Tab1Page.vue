<template>
  <ion-page>
        <ion-content class="ion-content-scroll-host">

          <ion-div class="header">
            <ion-div class="client">
              <ion-div>
                <ion-img class="customer" src="/assets/images/Profildetresse.png" alt=""><a href="profile.vue"></a></ion-img>
              </ion-div>
              <ion-div class="client__name">
                <ion-title class="name">Mme Détresse</ion-title>
              </ion-div>
            </ion-div>
            <ion-div class="header-secondPart">
              <ion-div>
                  <img  class="notif" src="/assets/images/notificationgroupe.png" alt="">
              </ion-div>

            </ion-div>
          </ion-div>

          <ion-div >
            <ion-title class="welcome">Bonjour</ion-title>
          </ion-div>

          <ion-div class="add-card">
          <ion-pararaph class="card-first">Ajouter vos cartes de fidélités</ion-pararaph>
          <ion-img class="first-card" src="/assets/images/plusSign.png"></ion-img> 
          
          </ion-div>

          <ion-div class="loterie-presentation">
            <ion-div class="first-loterie"></ion-div>
            <ion-paragraph class="loterie"> Tenter votre chance</ion-paragraph>
            <ion-div class="second-loterie "></ion-div>
          </ion-div>
          
  
          <ion-div class="game">
            <ion-paragraph class="game-title">Loterie Virtuelle</ion-paragraph>
            <ion-div class="game-cards">
              <div class="loterie_color" :style="{ backgroundColor: card1Color }">
                <ion-img class="loterie-card" :src="card1Icon"></ion-img>
              </div>
              <div class="loterie_color" :style="{ backgroundColor: card2Color }">
                <ion-img class="loterie-card" :src="card2Icon"></ion-img>
              </div>
              <div class="loterie_color" :style="{ backgroundColor: card3Color }">
                <ion-img class="loterie-card" :src="card3Icon"></ion-img>
              </div>
          </ion-div>
        <ion-button fill="clear" class="play" @click="startLottery">Jouer</ion-button>
      </ion-div>
      <div class="resultWin none">
        <h2 class="result-title"> Gagné ! </h2>
        <div class="result-content">
          <img src="/assets/images/win.png" alt="">
          <div class="anouncement">
          <p class="congrats">Bravo !</p>
          <p class="sentence">Vous avez gagné</p>
          </div>
          <button class="retourWin" @click="nextWin">Retour</button>
        </div>
      </div>
      <div class="resultLoose none">
        <h2 class="result-title"> Perdu </h2>
        <div class="result-content">
          <img src="/assets/images/loose.png" alt="">
          <div class="anouncement">
          <p class="congrats">Dommage !</p>
          <p class="sentence">Retentez une prochaine fois</p>
          </div>
          <button class="retour" @click="next">Retour</button>
        </div>
      </div>
          <div class="parcours">
            <h2 class="parcours__title">Nouveaux Parcours</h2>
            <p class="parcours__description">Découvrez un nouveau parcours centré autours du bio</p>
            <div class="parcours__block">
              <div class="parcours__pic">
                <img src="/assets/images/heraultMark.png"  alt="">
                <img src="/assets/images/grainesMark.png" alt="">
              </div>
              <div class="parcours__pic">
                <img src="/assets/images/soukMark.png" alt="">
                <img src="/assets/images/saigonMark.png" alt="">
              </div>
            </div>
          </div>

      </ion-content>
    </ion-page>
</template>

<script >
import { IonPage,IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonThumbnail, IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { arrayExpression } from '@babel/types';

export default {
  data() {
    return {
      card1Color: '#FFFFFF',
      card2Color: '#2543A0',
      card3Color: '#2543A0',
      card1Icon: '/assets/images/coloredIcon.png',
      card2Icon: '/assets/images/whiteIcon.png',
      card3Icon: '/assets/images/whiteIcon.png',
      intervalID: null,
      counter: 0,
      maxCounter: 15,
      endColor: null,
      endIcon: null,
    };
  },
  methods: {
    startLottery() {
      this.intervalID = setInterval(this.changeColors, 200);
    },
    changeColors() {
      this.card1Color = this.getRandomColor();
      this.card2Color = this.getRandomColor();
      this.card3Color = this.getRandomColor();
      this.counter++;
      if (this.counter >= this.maxCounter) {
        clearInterval(this.intervalID);
        this.endColor = this.card1Color;
        if (this.endColor === '#FFFFFF') {
          this.card1Icon = '/assets/images/coloredIcon.png';
        } else {
          this.card1Icon = '/assets/images/whiteIcon.png';
        }
        this.endColor = this.card2Color;
        if (this.endColor === '#FFFFFF') {
          this.card2Icon = '/assets/images/coloredIcon.png';
        } else {
          this.card2Icon = '/assets/images/whiteIcon.png';
        }
        this.endColor = this.card3Color;
        if (this.endColor === '#FFFFFF') {
          this.card3Icon = '/assets/images/coloredIcon.png';
        } else {
          this.card3Icon = '/assets/images/whiteIcon.png';
        }
        
        
        if (this.card1Color === '#FFFFFF' && this.card2Color === '#FFFFFF' && this.card3Color === '#FFFFFF') {
          
          const resultWin = document.querySelector(".resultWin")
          resultWin.classList.toggle("none")
          resultWin.classList.toggle("block")
          
          
        } else {
          
          const resultLoose = document.querySelector(".resultLoose")
          resultLoose.classList.toggle("none")
          resultLoose.classList.toggle("block")
          this.counter=0
        }
      }
    },
    getRandomColor() {
      const colors = ['#FFFFFF', '#2543A0'];
      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }, 
    
    nextWin() {
  const closeWin = document.querySelector(".resultWin")
  closeWin.classList.remove("block")
  closeWin.classList.add("none")
},
next() {
  const closeLoose = document.querySelector(".resultLoose")
  closeLoose.classList.remove("block")
  closeLoose.classList.add("none")
}


  },



};


</script>

<style>
*{
  font-family: 'Montserrat', sans-serif;
}

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
    padding-top: 20px;
  }

  .none{
    display: none;
  }

  .block{
    display: block;
  }

  .customer{
    cursor: pointer;
  }

  .notif{
    height: 30px;
    cursor: pointer;
  }

  .client{
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;
  }
  .header-secondPart{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-right: 5px;
  }
  .client__name{
    color: #2543A0;
    /* size: 30px; */
  }
.welcome{
  padding-top: 15px;
  color: #2543A0;
}
.name{
  color: #2543A0;
  font-size: 14px;
}
  /* h1{
    color: #2543A0;
    size: 50px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-top: 15px; 
  }*/
  .notification{
    /* height: 30px; */
    size: 30px;
  }
/* 
  .icon{
    background-color: --ion-color-new: #2543A0;
  } */
.add-card{
  height: 200px;
  width: 300px;
  background: linear-gradient(to top, #B5C6FD, #E2E9FF);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  border: #B5C6FD 5px solid;
}

  *{
    /* margin-right: 5px;
    margin-left: 5px; */
    margin-top: 1px;
  }

  .resultWin{
    position: absolute;
    top: 60px;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: white;

  }
  .resultLoose{
    position: absolute;
    top: 60px;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: white;

  }

  .result-title{
    padding-left: 25px;
    color: #2543A0;
    font-size: 65px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .result-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .anouncement{
    display: flex;
    flex-direction: column;
    align-items:center ;

  }
.result-content button{
  padding: 10px;
  width: 250px;
  border-radius: 15px;
  border: 1px #F78114 solid;
  background-color: #F78114;
  color: white;
}

.congrats{
  color: #2543A0;
  font-size: 25px;
}

.sentence{
  color: #2543A0;
  font-size: 20px;
}
  
  .first-card{
    width: 120px;
    padding-bottom: 10px;
    padding-top: 10px;
    cursor: pointer;
  }

  .card-first{
    padding-bottom: 10px;
    padding-top: 10px;
    color: #676767;
  }

  .first-loterie{
    height: 4px;
    border-radius: 20px;
    padding-left: 5px;
    padding-right: 5px;
    width: 10px;
    background: linear-gradient(to top, #B5C6FD, #E2E9FF);
    margin-left: 10px;
  }
  .second-loterie{
    height: 4px;
    border-radius: 20px;
    padding-left: 5px;
    padding-right: 5px;
    width: 10px;
    background: linear-gradient(to top, #B5C6FD, #E2E9FF);
    margin-right: 10px;
  }

  .loterie-presentation{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }
  .loterie{
    color: #2543A0;
  }

  .game{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
  }

  .game-title{
    margin-bottom: 15px;
    color: #FF9839;
  }
  .game-cards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px blue solid;
    padding: 10px;
    width: 320px;
    height: auto;
  }

  .loterie-card{
    width: auto;
    height: auto;
  }

  .play{
    background: #F78114;
    padding:5px ;
    color: white;
    margin-top: 15px;
    border-radius: 15px;
    
  }

  .parcours{
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  margin:25px 15px 25px 15px;
  }

.parcours__block{
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 5px #FFDDBF solid;
  border-radius: 15px;
  padding: 15px;
  align-items: center;
}

.parcours__pic{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.parcours__title{
  color: #2543A0;
  
}
.parcours__description{
  text-align: center;
  color: #939393;
}
.loterie_color{
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px #A7A7A7 solid;
  width: 100px;
  height: 135px;
}

.game  div:first-of-type{
  background-color: #2543A0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px #A7A7A7 solid;
  width: 100px;
  height: 135px;
}
</style>