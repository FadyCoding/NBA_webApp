import API from "./config";



export default function getPlayerStats(id, season){

	return fetch(API.baseUrl+'players/statistics?id='+id+'&season='+season, API.options)
	.then(data => data.json())
	.then(data => {console.log(data)
	return data.response})
	.catch(err => console.error(err));
}