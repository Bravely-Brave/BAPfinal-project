<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar style="height:1px;" slot="bottom">
        <ion-tab-button tab="ClientHomePage" href="/tabs/ComInit">
        </ion-tab-button>
          </ion-tab-bar>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="ClientHomePage" href="/tabsPageCom/Com1">
          <ion-img src="/assets/images/home.png" alt=""></ion-img>
          
        </ion-tab-button>

        <ion-tab-button tab="SearchStore" href="/tabsPageCom/Com2">
          <ion-img src="/assets/images/search.png" alt=""></ion-img>
        </ion-tab-button>

        <ion-tab-button tab="scanner" href="/tabsPageCom/Com3">
          <ion-img src="/assets/images/plusnav.png" alt=""></ion-img>
        </ion-tab-button>

        <ion-tab-button tab="RegisterClient" href="/tabsPageCom/Com4">
          <ion-img src="/assets/images/wallet.png" alt=""></ion-img>
        </ion-tab-button>

        <ion-tab-button tab="WalletPage" href="/tabsPageCom/Com5">
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
