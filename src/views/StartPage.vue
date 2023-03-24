<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar style="height: 1px;" slot="top">
        <ion-tab-button tab="ClientHomePage" href="/tabs/start1">
          <!-- <ion-img src="/assets/images/logoStart.png" alt=""></ion-img>
           -->
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
  --height:10px;

}
</style>
