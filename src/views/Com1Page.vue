<template>
<ion-page>
        <ion-content class="ion-content-scroll-host">
          <ion-div class="header">
            <ion-div class="client">
              <ion-div>
                <ion-img class="customer" src="/assets/images/profileHerault.png" alt=""><a href="profile.vue"></a></ion-img>
              </ion-div>
              <ion-div class="client__name">
                <ion-title class="name">Maison L'herault</ion-title>
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

          <div class="home-content">
            <div class="contentFirst">
                <h2 class="offers">Vos dernières offres</h2>
                <div class="bluePart">
                    <div class="whiteText">
                        <p class="blue">Réduction de 15% sur les chocolats</p> 
                        <p class="orange">Du 20 au 24 Février</p>
                    </div>
                </div>
            </div>

            <div class="contentSecond">
                <h2 class="clients">Vos derniers client</h2>
                <div class="lastClients">
                    <ion-img src="/assets/images/clientOne.png" alt=""></ion-img>
                    <ion-img src="/assets/images/clientTwo.png" alt=""></ion-img>
                </div>
            </div>
          </div>

    </ion-content>
</ion-page>
</template>
<script>
export default {
    
}
</script>
<style >
*{
  font-family: 'Montserrat', sans-serif;
}
ion-header{
    height: 55px;
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px 0 10px;
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

  }
.welcome{
  padding-top: 15px;
  color: #2543A0;
  font-size: 25px;
  margin-top: 15px;
}
.name{
  color: #2543A0;
  font-size: 17px;
}

  .notification{

    size: 30px;
  }

  .home-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 30px;

  }

  .contentFirst{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .offers{
    color: #2543A0;
    font-size: 20px;
  }

  .bluePart{
    width: 300px;
    height: 130px;
    border-radius: 10px;
    background-color:#CFDAFF ;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .whiteText{
    width: 260px;
    height: 90px;
    background-color: white;
    border-radius: 5px;
  }

  .blue{
    color: #2543A0;
    margin-left: 10px;
  }

  .orange{
    color: #F78114;
    margin-left: 105px ;

    text-align: center;
  }

  .contentSecond{
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    
  }

  .clients{
    color: #F78114;
    font-size: 20px;
  }
  .lastClients{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 5px #FFDDBF solid;
    border-radius: 10px;
    padding: 20px;

  }
</style>
