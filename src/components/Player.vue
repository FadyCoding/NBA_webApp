<template>
  <h1>
    Team : {{ teamId }}
    Season : {{ seasonId }}
  </h1>
  <div class="player" v-for="player in players" :key="player.id">
    <p>Firstname : {{ player.firstname }}</p>
    <p>Lastname : {{ player.lastname }}</p>

  </div>
  
  <div v-show="isVisible == true">
    <img alt="Vue logo" v-bind:src="require('@/assets/Luka_Doncic_AG.jpg')">
  </div>

</template>

<script>

import getPlayersByTeamAndSeason from '@/services/api/player_team_seasons';

export default {
    name: 'PlayerById',
    props: ['teamId', 'seasonId'],    

    data() {
        return  {
            players: [],
            isVisible: false
        }
    },


created: function(){
    this.retrieveTeamByIdAndSeason(self.teamId, self.seasonId); //on refere avec this au props du component
},
methods: {
  
    async retrieveTeamByIdAndSeason(teamId, seasonId) {
      const player_team_seasons = await getPlayersByTeamAndSeason(teamId, seasonId);
      this.players = player_team_seasons.slice(); //on attribue une copie de player_team_season au moment où il est rempli à notre objet.
    }
    
}

}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
