<template>
    <div>
      <h1>Live Games</h1>
    </div>

<!--     on enlevera le v show dans ce cas c'est plus logique de garder les scores "fixes"--> 
   <section class="schedule">
        <div class="game" v-for="(game, index) in games" :key="game.id" v-show="isVisible == true" v-on:click="displayPlayers(game.teams.visitors.id, game.teams.home.id)">
            <p class="versus">{{ game.teams.home.nickname }} VS {{ game.teams.visitors.nickname }}</p>

            <h1>Game n°{{ index+1 }}</h1>
            <div class="teamLogo">
                <img :src="game.teams.home.logo" />
                <img :src="game.teams.visitors.logo" />
            </div>
            <p>Arena: {{ game.arena.name }}</p>
            <p>Date: {{ game.date.start }}</p>
            <p>Status: {{ game.status.long }}</p>
            <p>Score: {{ game.score }}</p>

            <!-- Bouton clignotant rouge -->
            <div class="button-live"></div>
        </div>
    </section>
    <section>
         <PlayerTeam :player="player" v-for="player in players" :key="player.firstname" />
        <!-- <PlayerTeam v-for="player in playersOrganizedData" :key="player.id" :firstname="player.firstname" :lastname="player.lastname"/> -->
    </section>

</template>

<script>
//faire en sorte que ça clique sur logo GSW pour display GSW's player
//Sort out the players bu their firstname by solving the computing data issue

// import getPlayersByTeamAndSeason from '@/services/api/player_team_seasons';
import getLiveGamesData from "@/services/api/games.js";
import getPlayersByTeamAndSeason from '@/services/api/player_team_seasons';
import PlayerTeam from "./PlayerTeam.vue";
import moment from "moment";

export default {
    name: "LiveGames",

    computed: {
        playersOrganizedData: function() {
            const field = ["AZName", "ZAName"].includes(this.playersSortType) ? "firstname" : "lastname";
            const filterFunc = (a) => a.firstname.toLowerCase().includes(this.search.toLowerCase())
            const comparator = (a,b) => a[field].localeCompare(b[field])
            let data = this.players.filter(filterFunc)
            data = data.sort(comparator)
            return data
        }   
    },

    data() {
        return {
            games: [],
            currentYear: moment().format('YYYY'),
            isVisible: true,
            //currentTeamSelected : 21,
            players : [],
            search : "",
            playersSortType : "AZName"

        };
    },

    created: function () {
        this.retrieveLiveGamesData();
    },

    methods: {
        async retrieveLiveGamesData() {
            this.games = await getLiveGamesData();
        },

        displayPlayers : async function (idVisitor, idHome) {
            const visitorPlayers = await getPlayersByTeamAndSeason(idVisitor, this.currentYear-1);
            const homePlayers = await getPlayersByTeamAndSeason(idHome, this.currentYear-1);

            this.players = [...visitorPlayers, ...homePlayers]
            /*             for (i = 0; i <visitorPlayers.length;  i++) {
                this.players.push(visitorPlayers[i])
            } === this.players = [...visitorPlayers] */


            console.log(this.players);

        }
    },

    components: {
        PlayerTeam

    }

}

</script>

<style>

.schedule {
  display: flex;
  flex-wrap: wrap;
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
    justify-content: center;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.versus{
    font-family: 'Changa One', cursive;
    font-size: xx-large;
    text-align: center;
}

img{
    width: 4vw;
    padding: 0 10%;
}

.teamLogo{
    display:flex;
    flex-direction: row;
    justify-content: center;
}


</style>