<template>
   <section class="schedule">
        <div>
        <h1>Live Games</h1>
        </div>

    <!--Displays the games and matchups with the respective logo, arena, status and score-->
        <div class="game" v-for="(game, index) in games" :key="game.id" v-show="isPlayerVisible == true" v-on:click="displayPlayers(game.teams.visitors, game.teams.home)">
            <p class="versus">{{ game.teams.home.nickname }} VS {{ game.teams.visitors.nickname }}</p>
            <h1>Game n°{{ index+1 }}</h1>
            <div class="teamLogo">
                <img :src="game.teams.home.logo" />
                <img :src="game.teams.visitors.logo" />
            </div>
            <p>
            Arena: {{ game.arena.name }}
            <br>
            Date: {{ game.date.start }}
            <br>
            Status: {{ game.status.long }}
            <br>
            <span v-if="game.score">
                Score: {{ game.score }}
            </span>
            </p>


            Contains the red live button implemented in the style
            <div v-if="game.status.long === 'live'" class="button-live"></div>
        </div>
    </section>

    <section class="container">
        <!--Passes to the composant the player's data by iterating through the players tab -->
         <PlayerTeam :player="player" v-for="player in players" :key="player.firstname" />
    </section>


</template>


<script>


// import getPlayersByTeamAndSeason from '@/services/api/player_team_seasons';
import getLiveGamesData from "@/services/api/games.js";
import getPlayersByTeamAndSeason from '@/services/api/player_team_seasons';
import PlayerTeam from "./PlayerTeam.vue";
import moment from "moment";

export default {
    name: "LiveGames",

    //  Initializes the data respectively
    data() {
        return {
            games: [],
            currentYear: moment().format('YYYY'),
            isPlayerVisible: true,
            currentTeamSelected : 21,
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

        displayPlayers : async function (visitors, home) {
            console.log("visitor", visitors, "home", home)
            const visitorPlayers = await getPlayersByTeamAndSeason(visitors.id, this.currentYear-1);
            const homePlayers = await getPlayersByTeamAndSeason(home.id, this.currentYear-1);

            //  Sort players according to their size
            if (localStorage.getItem("sort") === "height") {
                this.players = [...visitorPlayers, ...homePlayers].sort((a, b) => {
                    return b.height.meters - a.height.meters
                })
            }

            // Sort players according to their weight
            if (localStorage.getItem("sort") === "weight") {
                this.players = [...visitorPlayers, ...homePlayers].sort((a, b) => {
                    return b.weight.kilograms - a.weight.kilograms
                })
            }

            // Sort players according to there firstname
            if (localStorage.getItem("sort") === "firstname") {
                this.players = [...visitorPlayers, ...homePlayers].sort((a, b) => {
                    return b.firstname - a.firstname
                })
            }

            //  If we don't have the weight nor the height nor the firstname as a sort method, we sort the height by default
            if (["weight", "height", "firstname"].includes(localStorage.getItem("sort")) ) {
                this.players = [...visitorPlayers, ...homePlayers].sort((a, b) => {
                    return b.height.meters - a.height.meters
                })
            }

            //  Sets isPlayerVisible to true to show the players
            this.isPlayerVisible = true;

            //  Displays the players to the console, helps in debugging
            console.log("Teams selected", this.players);

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
  justify-content: center;
  flex-wrap: wrap;
}

</style>