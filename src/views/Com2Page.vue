<template>
    <ion-page> 
      <ion-content :fullscreen="true" >
            <ion-div class="searchIntro">
              <ion-title class="shop">Vos Commerces</ion-title>
              <p class="shopIntro">Trouvez les commerces tout prêt de chez vous</p>
            </ion-div>
  
            <ion-searchbar  class="my-searchbar" placeholder="Nom de votre commerce" @ionInput="onInput" icon="search" icon-class="my-icon-class"></ion-searchbar>
  
            <ion-list class="boutiques" v-if="showDropdown" >
              <ion-item  v-for="item in filteredItems" :key="item.id"  v-on:click="selectItem(item)" >
            {{ item.text }}
              </ion-item>
              
            </ion-list>
            <!-- <p v-else>Aucun résultat trouvé</p> -->
            
            
               <div class="categories">
                      <div class="categorie__type">
                        <p class="filter"><span class="bold">Trier : </span> Catégrorie</p>
                        <img class="bottom" @click="filter"  src="/assets/images/arrow.png" alt="">
                      </div> 
                       <div class="box none">        
                       <form>
  
                       
                          <div>
                             
                              <input class="" type="checkbox" name="size" id="categorie">
                              <label class="type" for="categorie">Alimentaire</label>
                              
                          </div>
  
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Santé</label>
                                  
                              </div>
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Décoration</label>
                                  
                              </div>
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Exterieur</label>
                                  
                              </div>
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Mécanique</label>
                                  
                              </div>
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Beauté</label>
                                  
                              </div>
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Papeterie</label>
                                  
                              </div>
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Restaurants</label>
                                
                              </div>
                              <div>
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type" for="categorie">Services</label>
                                  
                              </div>
                              <div class="last">
                                  
                                  <input class="" type="checkbox" name="size" id="categorie">
                                  <label class="type " for="categorie">Vêtements</label>
                                  
                              </div>
                              </form>
                      </div>
                  </div>
             
  
  
            <div class="display">

                <div class="shopDisplay">
                <ion-img class="store" src="/assets/images/sacdegraines.png"></ion-img>
                <ion-div class="name" @click="description">
                  <ion-title class="store-name">Le sac de graines</ion-title>
                  <ion-paragraph>Épicerie</ion-paragraph>
                </ion-div>
                <div class="left-part">
                  <img @click="favorite" class="filled none" src="/assets/images/heartFilled.png" alt="">
                  <img @click="favorite" class="heart" src="/assets/images/heart.png" alt="">
                  <ion-paragraph class="note">4.2</ion-paragraph>
                </div>
              </div>

  
              <div class="shopDisplay">
                <ion-img class="store" src="/assets/images/dock.png" ></ion-img>
                <ion-div class="name">
                  <ion-title class="store-name">Dock'd Co</ion-title>
                  <ion-paragraph>Magasin de décoration</ion-paragraph>
                </ion-div>
                <div class="left-part">
                  <img @click="favorite" class="filled none" src="/assets/images/heartFilled.png" alt="">
                  <img @click="favorite" class="heart" src="/assets/images/heart.png" alt="">
                  <ion-paragraph class="note">4.4</ion-paragraph>
                </div>
              </div>
  
              <div class="shopDisplay">
                <ion-img class="store" src="/assets/images/souk.png"></ion-img>
                <ion-div class="name">
                  <ion-title class="store-name">Souq Alcharq</ion-title>
                  <ion-paragraph class="souq">Commerce d'alimentation générale</ion-paragraph>
                </ion-div>
                  <div class="left-part">
                    <img @click="favorite" class="filled none" src="/assets/images/heartFilled.png" alt="">
                    <img @click="favorite" class="heart " src="/assets/images/heart.png" alt="">
                    <ion-paragraph class="note">4.4</ion-paragraph>
                </div>
              </div>

              <div class="shopDisplay" >
                  <ion-img class="store" src="/assets/images/herault.png"  ></ion-img>
                  <ion-div class="name" >
                    <ion-title class="store-name">Maison L'Herault</ion-title>
                    <ion-paragraph>Boulangerie pâtisserie</ion-paragraph>
                  </ion-div>
                  <div class="left-part" >
                      <img class="heart " @click="favorite"  src="/assets/images/heart.png" alt="">
                      <img class="filled none" @click="favorite" src="/assets/images/heartFilled.png" alt="">
                    <ion-paragraph class="note">4.6</ion-paragraph>
                </div>
              </div>
              
            </div>
  
          <div class="card none">
            <div class="description-card visibility" >
                  <img class="trait" src="/assets/images/trait.png" alt="" @click="hide">
                  <h1>Le Sac De Graines</h1>
                  <img class="portrait" src="/assets/images/heraultDescription.png" alt="">
                  
                  <div class="content">
                    
                    <div class="contentDescription">
                      <h2>Epicerie</h2>
                      <div class="span"></div>
                    </div>
                    <div class="content-fonctionalities">
                        <div class="comType">
                        <p class="descriptionText">Votre épicerie vrac de produits bio et locaux du vieux centre 
                        d'Antony. Nous avons fait le choix de sourcer des produits bio, locaux et de saison.</p>
                        <p class="contact none">contact@maisonlherault.fr <br>
                        01 46 68 80 92</p>
                        </div>
                        <div class="google">
                          <div class="map">
                            <img src="/assets/images/GoogleMap.png" alt="">
                          </div>
                          <p class="mark">4.6</p>
                        <div class="partner">
                            <img src="/assets/images/partner.png" @click="showContact" alt="">
                        </div>
                        </div>
                        
                    </div>
                  </div>
              </div>
          </div>
      </ion-content>
    </ion-page>
  </template>
  

  
  
  <script >
  
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  
  export default {
    data() {
      return {
        items: [
          { id: 1, text: 'MAISON LHERAULT' },
          { id: 2, text: "DOCKD CO" },
          { id: 3, text: 'SOUQ ALCHARQ' },
          { id: 3, text: 'LE SAC DE GRAINES' },
          { id: 4, text: 'PHARMACIE CHAU VINH' }
        ],
        searchText: '',
        showDropdown: false,
        // filteredItems: [],
        selectedItem: null
      }
    },
    
    computed: {
      filteredItems() {
        return this.items.filter(item =>
          item.text.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    },
    
    methods: {
      onInput(event) {
        const searchText = event.target.value.toLowerCase();
        this.filteredItems = this.items.filter(item => item.text.toLowerCase().startsWith(searchText));
        this.showDropdown = searchText.length > 0 && this.filteredItems.length > 0;
        this.selectedItem = null; 
      },
      selectItem(item) {
        this.selectedItem = item;
        this.store(); 
      },
      store() {
        const storeOne = document.querySelector(".shopDisplay :nth-of-type(1)");
        const storeTwo = document.querySelector(".shopDisplay :nth-of-type(2)");
        const storeThree = document.querySelector(".shopDisplay :nth-of-type(3)");
        const storeFour = document.querySelector(".shopDisplay :nth-of-type(4)");
        if (this.selectedItem && this.selectedItem.text[0]) {
          storeTwo.classList.toggle = ("none");
          storeThree.classList.toggle = ("none");
          storeFour.classList.toggle = ("none");
        }
      },
  
   
  
      description(){ 
        const shop = document.querySelector(".shopDisplay");
        const closure = document.querySelector(".trait");
        const card = document.querySelector(".card");
        card.classList.toggle("block")
        card.classList.toggle("none") 
  
      },
  
      hide(){
        const shop = document.querySelector(".display")
        const closure = document.querySelector(".trait");
        const card = document.querySelector(".card");
        card.classList.toggle("none")
      },
  
      filter(){
        const content = document.querySelector(".box")
        content.classList.toggle("none")
        content.classList.toggle("block")
      },
  
    favorite(event) {
     
      const images = event.target.parentNode.querySelectorAll('.left-part img');
      
      images.forEach(image => {
     
        if (image.classList.contains('none')) {
          
          image.classList.remove('none');
        } else {
          
          image.classList.add('none');
        }
  
        // const hearts =document.querySelectorAll(".filled")
  
        // hearts.forEach(heart =>{
        //   if(!heart.classlist.contains('none')){
        //     this.$store.commit('favorite', this.shop)
        //   }
        // })
      });
  
    },
  
  
  addToFavorites() {
        
        this.$store.commit('addToFavorites', this.shop)
      },
  
  showContact (){
    const partner = document.querySelector(".contact")
    partner.classList.toggle("none")
    partner.classList.toggle("block")
  }
  
    
  }
  
  }
  
  </script>
  
  
  
  
  
  
  <style>
  *{
  font-family: 'Montserrat', sans-serif;
}
  
  .block{
    display: block;
  }
  
  .unactive{
    display:none;
  }
  
  .active{
    display: block;
  }
  .bold{
    color: #2543A0;
    font-weight: bolder;
  }
  form{
    margin-top: 10px;
  }
  .searchHeader{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 175px;
    padding-top: 35px;
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
    top: 225px;
    padding: 0 25px 0 25px;
    /* padding-top:0;
    padding-bottom: 0; */
    cursor: pointer;
  }
  .box{
    margin-bottom: 5px;
    
  }
  
  .none {
    display: none;
  }
  .categorie__type{
    display: flex;
    gap: 5px;
    align-items: center;
  }
  
  .bottom{
    height: 30px;
  }
  
  .ion-header{
    height: 55px;
    border: none;
  }
  
  /*.profilSearch{
    height: auto;
    width: 40px; 
  }*/
  
  .searchIntro{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-around;
    margin-left:20px;
    align-items: center;
    margin-top: 55px;
    width: 230px;
  }
  .shop{
    margin-right: 40px;
    color: #2543A0;
  }
  .shopIntro{
    margin-left: 20px;
    color: #939393;
  }
  
  .display{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    padding-top: 45px;
    margin-bottom: 10px;
    z-index: -1;
  }
  
  ion-searchbar{
    margin-top: 10px;
  border-radius: 30px;
  }
  .shopDisplay{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
    border: 2px #F8FAFF solid;
    border-radius: 15px;
    width: 350px;
    /* height: 100px; */
    padding: 5px;
    background-color: #F8FAFF;
    box-shadow: 0 4px 4px #0000002b;
      cursor: pointer;
  }
  
  
  /* .note{
    padding-top: 65px;
    padding-right: 15px;
  } */
  .mechant{
    padding-top: 55px;
  }
  
  .store{
    height: auto;
    width: 85px;
  }
  
  .name{
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: flex-start;
    align-items: start;
  }
  
  .store-name{
    color: #2543A0;
  }
  .name ion-paragraph{
    color: #F78114;
  }
  
  .name :nth-of-type(1){
    padding-right: 17px;
  }
  
  .group{
    display: flex;
    justify-content: flex-start;
    align-items: start;
    gap: 5px;
  }
  
  .store-name{
    margin-left: -21px;
  }
  .store-name :nth-of-type(2){
    margin-left: -21px;
  }
  .store-name :nth-of-type(3){
    margin-left: -20px;
  }
  .store-name :nth-of-type(4){
    margin-left: -21px;
  }
  
  .souq{
    width: 198px;
  }
  
  ion-searchbar{
    padding-top: 25px;
    padding-bottom: 25px;
  }
  /* .visibility{
     display: none;
  
  } */
  
  .description-card{
    padding: 15px;
    border: 1px grey solid;
    border-radius: 10px;
    background-color: #F5F8FF;
    /* display: none; */
    display: block;
    position: absolute;
    top: 85px; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* height: 0px; */
    /* padding-bottom: 5px; */
  }
  
  .card{
    z-index: 101;
  
  }
  .content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .contentDescription{
    width: 250px;
    margin-right: 15px;
  }
  .content-fonctionalities{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px 15px 25px;
  }
  .descriptionText{
    color: #2543A0;
    text-align: start;
  }
    .google{
    border: 1px  #F78114 solid;
    border-radius: 10px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    }
  
    .mark{
      color:#F78114
    }
    .map{
      border-bottom: 1px #F78114 solid ;
      padding-bottom: 20px;
    }
    .partner{
    border-top: 1px #F78114 solid;
    padding-top: 20px;
    }
    .portrait{
      margin-bottom: 30px;
    }
  
    h1{
      margin-bottom: 40px;
      color: #2543A0;
    }
  
    h2{
      color: #2543A0;
    }
  
    .span{
      padding-bottom: 6px;
      background-color:  #F78114  ;
      width: 155px;
      height: 3px;
      border-radius: 15px;
    }
  
    .left-part{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap:40px;
    }
  
    .heart{
      height: 20px;
    }
  
    .filled{
      height: 20px;
    }

    .comType{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .contact{
        color: #F78114;
    }
  </style>                                                                                                
