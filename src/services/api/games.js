import moment from "moment";
import API from "./config";


/* data = reponse de la requete dmd a l API */

export default function getLiveGamesData(){
	const datesNow = moment().format('YYYY-MM-DD');

	return fetch(API.baseUrl+'games?date='+datesNow, API.options)
	.then(data => data.json())
	.then(data => {console.log(data)
	return data.response})
	.catch(err => console.error(err));
}