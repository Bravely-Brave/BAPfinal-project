<template >
    <ion-page> 
        <ion-content>
        <div class="start">
            <img src="/assets/images/logoStart.png" alt="">
            <div class="what"><p class="identification">Vous êtes</p></div>
            <div class="type">
                <div class="comPart">
                    <img src="/assets/images/commercant.png" alt="">
                    <div class="buttonCom">
                        <a class="com" href="/TabsPageCom/ComInit">Commerçant</a>
                    </div>
                </div>
                <div class="clientPart">
                    <img src="/assets/images/client.png" alt="">
                    <div class="buttonClient">
                        <a class="client" href="/tabs/TabInit">Habitant</a>
                    </div>
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
.start{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
}
    
.comPart{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.clientPart{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
}
.type{
    display:flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 70px;
    border: 3px #EEF2FF solid;
    border-radius: 5px;
    padding-bottom: 40px;
    margin-top:50px ;
}

.identification{
    color: #2543A0;
    font-weight: 500;
    font-size: 20px;
}

.com{
    color: white;
    text-decoration: none;
    
}
.client{
    color: white;
    text-decoration: none;

}

.what{
    height: 50px;
    width: 100px;
    position: absolute;
    top: 260px;
    background-color: white;
}
.buttonClient{
    height: 40px;
    width: 115px; 
    background-color: #2543A0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
.buttonCom{
    height: 40px;
    width: 115px; 
    background-color: #F78114;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
</style>