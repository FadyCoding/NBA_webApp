<template>

<Navbar/>
<Formulaire/>
<LiveGames/>
<Player/>  

</template>

<script>
import Navbar from './components/Navbar.vue'
import LiveGames from './components/LiveGames.vue'
import Formulaire from './components/Formulaire.vue'
/* import getPlayerById from './services/api/player_data.js'*/

/* getPlayerById(2);*/

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
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Changa One', cursive;
  text-align: left;
  /* margin-top: 60px; */

  /*   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
}

</style>
