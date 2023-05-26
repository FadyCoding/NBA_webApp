<template>

<Navbar/>
<Formulaire/>
<LiveGames/>
<Player/>  
<responsive_cardVue/>

</template>

<script>
import Navbar from './components/Navbar.vue'
import LiveGames from './components/LiveGames.vue'
import Formulaire from './components/Formulaire.vue'



const CompPlayer = { 
  name : 'App' , 
  components : {

    Navbar,

    LiveGames,

    Formulaire

    }

   }
export default CompPlayer


</script>

<style>
*{
  margin: 0;
}

#app {
  font-family: 'Changa One', cursive;
  text-align: left;
}

</style>
