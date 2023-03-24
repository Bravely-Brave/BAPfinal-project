<template>

  
  <ion-chip class="clickable" v-for="word in searchWords" :key="word">{{ word }}</ion-chip>
  <!-- <div class="firstcircle"><ion-img src="/assets/images/circlecard.png" alt=""></ion-img></div> -->
  <div class="container">
  <h1 class="title">Vos Cartes Fidélité</h1>
  <p >Ajouter vos cartes de fidélité à  <br>
votre portefeuille</p>


  <ion-searchbar  class="my-searchbar" placeholder="Nom de votre commerce" @ionInput="onInput" 
  
  icon="search"
  icon-class="my-icon-class"></ion-searchbar>
  
</div>

  <ion-list v-if="showDropdown">
    <ion-item v-for="item in filteredItems" :key="item.id">
      {{ item.text }}
    </ion-item>
  </ion-list>
  <!-- <p v-else>Aucun résultat trouvé </p> -->


<div class="container0">
  


    <div class="container2" ><p>A LA FONTAINE FLEURIE </p>
    <ion-button class="my-button" style="--background: #FFA500;"><ion-icon name="add"></ion-icon>+</ion-button>
   
  </div> 
  <div class="container2">
    <p>AETERNAE – Services Funéraires</p>
    <ion-button class="my-button" style="--background: #FFA500;"><ion-icon name="add"></ion-icon>+</ion-button>
    
  </div>
 



  <div class="round"></div>

  <div class="container2">
    <p>CLAFOUTIS</p>
    <ion-button class="my-button" style="--background: #FFA500;"><ion-icon name="add"></ion-icon>+</ion-button>
    
  </div>
  <div class="container2">
    <p>COTÉ FERMETURES</p>
    <ion-button class="my-button" style="--background: #FFA500;"><ion-icon name="add"></ion-icon>+</ion-button>
    
  </div>

  <div class="round"></div>

<div class="container2">
  <p>DOCK'D CO</p>
  <ion-button class="my-button" style="--background: #FFA500;"><ion-icon name="add"></ion-icon>+</ion-button>
  
</div>

<div class="round"></div>

<div class="container2">
  <p>PHARMACIE CHAU VINH</p>
  <ion-button class="my-button" style="--background: #FFA500;"><ion-icon name="add"></ion-icon>+</ion-button>
  
</div>

<div class="container2">
  <p>PHARMACIE JOHN</p>
  <ion-button class="my-button" style="--background: #FFA500;"><ion-icon name="add"></ion-icon>+</ion-button>
  
</div>




</div>






</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'A LA FONTAINE FLEURIE' },
        { id: 2, text: 'AETERNAE – Services Funéraires' },
        { id: 3, text: 'CLAFOUTIS' },
        { id: 3, text: 'COTÉ FERMETURES' },
        { id: 4, text: 'PHARMACIE CHAU VINH' }
      ],
      searchText: '',
      showDropdown: false
    };
  },
  computed: {

    filteredItems() {
  const searchWords = this.searchText.toLowerCase().split(' ');
  return this.items.filter(item =>
    searchWords.every(word => item.text.toLowerCase().includes(word))
  );
}

  },
  methods: {

    selectWord(word) {
      this.selectedWord = word;
    },
    onInput(event) {
      this.searchText = event.target.value;
      this.showDropdown = this.searchText.length > 0;
    }
  }
};
</script>



<style scoped>
*{
  font-family: 'Montserrat', sans-serif;
}
.test{
  display: flex;
  margin-left: 0px;
}

.firstcircle{
  width: 70px;

  align-items: flex-end;
  margin-left: 290px;
}



.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #2543A0;
}

.title {
  font-size: 30px;
  color: #2543A0;
  margin-bottom: 20px;
}

.container0{
  margin-top: 15px;
}

.container2{
  background-color: #EEF2FF;
  color: #2543A0;
  margin-left: 20px;

  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 40px;

  border-radius: 10px;
  border: 1px solid #2543A0;
  
  width: 80%;
  height: 39px;
  font-size: 13px;
 
  display: flex;
  justify-content:space-between;
  align-items: center;

}





.my-searchbar {
  --background: #fffdfd;
  --border-color: #efe7e7;
  --color: #333;
  --border-radius: 20px;
  --height: 30px;
}

.my-icon-class {
  color: #2543A0 !important;
  font-size: 24px;
}

.my-button {
  width: 20px;
  height: 25px;
  margin-right: 10px;
 
  border-radius: 50%;
}

.round{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: orange;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* .background-image {
    background-image: url('/assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    height: 100%;
  } */






</style>