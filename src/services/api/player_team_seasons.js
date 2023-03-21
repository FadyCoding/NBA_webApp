import API from "./config";

export default function getPlayersByTeamAndSeason(id_team, id_season){
	return fetch(API.baseUrl+'players?team='+id_team+'&season='+id_season, API.options)
        .then(response => response.json())
        .then(response => {console.log(response)
        return response.response})
        .catch(err => console.error(err));
}