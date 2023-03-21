<template>
    <div>
      <h1>Live Games</h1>
    </div>

<!--     on enlevera le v show dans ce cas c'est plus logique de garder les scores "fixes"--> 
   <section class="schedule">
        <div class="game" v-for="(game, index) in games" :key="game.id" v-show="isVisible == true" v-on:click="$emit('onTeamIdChange', game.teams.home.id)">
            <h1>Game n°{{ index+1 }}</h1>
            <p>Home {{ game.teams.home.name }} VS Visitors {{ game.teams.visitors.name }}</p>
            <img src="game.team.home.logo" />
            <p>Arena: {{ game.arena.name }}</p>
            <p>Date: {{ game.date.start }}</p>
            <p>Status: {{ game.status.long }}</p>
            <p>Score: {{ game.score }}</p>

            <!-- Bouton clignotant rouge -->
            <div class="button-live"></div>
        </div>
    </section>
    <section>
        <PlayerTeam :player="player" v-for="player in players" :key="player.id"/>
    </section>

</template>

<script>
import getPlayersByTeamAndSeason from '@/services/api/player_team_seasons';
import getLiveGamesData from "@/services/api/games.js";
import PlayerTeam from "./Player.vue";
import moment from "moment";

export default {
    name: "LiveGames",
    data() {
        return {
            games: [],
            currentYear: moment().format('YYYY'),
            isVisible: true,
            currentTeamSelected : 21,
            players : []
        };
    },
    created: function () {
        this.retrieveLiveGamesData();
    },
    methods: {
        async retrieveLiveGamesData() {
            this.games = await getLiveGamesData();
        },

        onTeamIdChange: async function (teamId) {
            const PlayersByTeamAndSeason = await getPlayersByTeamAndSeason(teamId, this.currentYear);
            this.players = PlayersByTeamAndSeason.slice();
        }
    },
    components: { PlayerTeam }
}

</script>

<style>

.schedule {
  display: flex;
  flex-wrap: wrap;
  /*okok*/
}

.button-live {
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    top: 10px;
    right: 10px;

    /* Rendre rond le carré */
    border-radius: 50%;
    animation: clignotement infinite 1000ms ease;
}

@keyframes clignotement {
    50% {
        opacity: 0;
    }
}

.game {
  position: relative;
  flex-basis: 25%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
}


</style>