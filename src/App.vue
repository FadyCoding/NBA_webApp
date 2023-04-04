<template>

<Navbar/>
<LiveGames/>
<Player/>  

</template>

<script>
import Navbar from './components/Navbar.vue'
import LiveGames from './components/LiveGames.vue'
/* import getPlayerById from './services/api/player_data.js'*/

/* getPlayerById(2);*/

const CompPlayer = { 
  name : 'App' , 
  components : {

    Navbar,

    LiveGames

    }

   }
export default CompPlayer


</script>

<style>
*{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  /* margin-top: 60px; */

  /*   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
}

</style>
