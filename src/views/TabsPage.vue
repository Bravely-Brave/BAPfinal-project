<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar style="height:1px;" slot="bottom">
        <ion-tab-button tab="ClientHomePage" href="/tabs/TabInit">
        </ion-tab-button>
          </ion-tab-bar>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="ClientHomePage" href="/tabs/Tab1">
          <ion-img src="/assets/images/home.png" alt=""></ion-img>
          
        </ion-tab-button>

        <ion-tab-button tab="SearchStore" href="/tabs/Tab2">
          <ion-img src="/assets/images/search.png" alt=""></ion-img>
        </ion-tab-button>

        <ion-tab-button tab="AddCard" href="/tabs/Tab3">
          <ion-img src="/assets/images/plusnav.png" alt=""></ion-img>
          
        </ion-tab-button>

        <ion-tab-button tab="RegisterClient" href="/tabs/Tab4">
          <ion-img src="/assets/images/wallet.png" alt=""></ion-img>
        </ion-tab-button>

        <ion-tab-button tab="WalletPage" href="/tabs/Tab5">
          <ion-img src="/assets/images/favoris.png" alt=""></ion-img>
        </ion-tab-button>

      

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>

<style>

ion-tabbar {
  --background: red;
}</style>
