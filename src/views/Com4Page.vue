<template>
    <ion-page> 
      <ion-content :fullscreen="true" >
            <div class="searchIntro">
              <ion-title class="shop">Votre Portefeuille</ion-title>
            </div>
  
            <ion-searchbar  class="my-searchbar" placeholder="Nom du client" @ionInput="onInput" icon="search" icon-class="my-icon-class"></ion-searchbar>
  
            <ion-list class="boutiques" v-if="showDropdown" >
              <ion-item  v-for="item in filteredItems" :key="item.id"  v-on:click="selectItem(item)" >
            {{ item.text }}
              </ion-item>
              
            </ion-list>
            <!-- <p v-else>Aucun résultat trouvé</p> -->
            
             
  
        <section class="wallet">

        
                <div class="client" @click="description">
                    <div class="info">
                        <h3> <span class="lastname">Mme Détresse</span> Oumille</h3>
                        <p class="creation">Carte créée le <span class="date">08/03/2023</span></p>
                        <p class="number">09875</p>
                    </div>
                    <div class="buttonProfil">
                        <p class="button">Profil</p>
                    </div>
                </div>
              


                <div class="client">
                    <div class="info">
                        <h3> <span class="lastname">Mme.Wadoux</span> Charlotte</h3>
                        <p class="creation">Carte créée le <span class="date">25/01/2023</span></p>
                        <p class="number">12456</p>
                    </div>
                    <div class="buttonProfil">
                        <p class="button">Profil</p>
                    </div>
                </div>


                <div class="client">
                    <div class="info">
                        <h3> <span class="lastname">Mr.Glairacq</span>  Patrick</h3>
                        <p class="creation">Carte créée le <span class="date">10/02/2023</span></p>
                        <p class="number">28913</p>
                    </div>
                    <div class="buttonProfil">
                        <p class="button">Profil</p>
                    </div>
                </div>


                <div class="client">
                    <div class="info">
                        <h3> <span class="lastname">Mr.Belmonte</span>  Carlos</h3>
                        <p class="creation">Carte créée le <span class="date">24/03/2023</span></p>
                        <p class="number">09436</p>
                    </div>
                    <div class="buttonProfil">
                        <p class="button">Profil</p>
                    </div>
                </div>


                <div class="client">
                    <div class="info">
                        <h3> <span class="lastname">Mme.Falaise</span> Anna</h3>
                        <p class="creation">Carte créée le <span class="date">06/03/2023</span></p>
                        <p class="number">05489</p>
                    </div>
                    <div class="buttonProfil">
                        <p class="button">Profil</p>
                    </div>
                </div>

        </section>
  
          <div class="card none">
            <img class="cross" src="/assets/images/cross.png" alt="" @click="hide">
            <h2 class="clientCard"> Carte Client</h2>
            <h3 class="cardName">Détresse Oumille</h3>
            <section class="cardContent">
                <img class="theCard" src="/assets/images/cartefidelite.png" alt="">
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
                <p class="cagnotte">Ma cagnotte</p>
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
export default {
    

methods:{
    description(){ 
        const bar = document.querySelector(".my-searchbar");
        const closure = document.querySelector(".cross");
        const card = document.querySelector(".card");
        card.classList.toggle("none") 
        bar.classList.toggle("none") 

 
  
      },

      hide(){
        const bar = document.querySelector(".my-searchbar");
        const closure = document.querySelector(".cross");
        const card = document.querySelector(".card");
        card.classList.toggle("none")
        bar.classList.toggle("none") 
        bar.classList.toggle("block") 

      }
}
}
</script>
<style >
*{
  font-family: 'Montserrat', sans-serif;
}
.searchIntro{
    padding: 55px 25px 85px 25px;
}
.shop{
    margin-top: 45px;
    color: #2543A0;
}
.my-searchbar{
    padding-bottom: 75px;
    position: relative;
}
    .boutiques{
    z-index: 2;
    position: absolute;
    width: 100%;
  }
    .filter{
    color: #2543A0;
    font-weight: 300;
  }
  .type{
    margin-left: 10px;
  }
  .categories{
    position: absolute;
    /* z-index: 100; */
    background-color: white;
    border-radius: 15px;
    margin-left: 10px;
    top: 178px;
    padding: 0 25px 0 25px;
    /* padding-top:0;
    padding-bottom: 0; */
    cursor: pointer;
  }
  .bottom{
    height: 30px;
  }
    .box{
    margin-bottom: 5px;
    
  }

  .none{
    display: none;
  }
  .block{
    display: block;
  }
    .categorie__type{
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .wallet{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .client{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    background-color: #F8FAFF;
    width: 310px;
    padding: 20px 0 20px 20px;
    height: 110px;
    box-shadow: 3px 4px 5px rgb(220, 218, 215);
  }

  h3{
    font-size: 16px;
    font-weight: 400 ;
    color: #2543A0;
  }
  .number{
    margin-left: 150px;
  }
  .buttonProfil{
    width: 85px;
    height: 110px;
    border-radius: 0 25px 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #FF9431 , #CA6100);
  }
  .card{
    position: absolute;
    top: 30px;
    background-color: white;
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
  .theCard{
    height: 115px;
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