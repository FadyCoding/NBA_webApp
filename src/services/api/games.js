import moment from "moment";
import API from "./config";


export default function getLiveGamesData(){
	const datesNow = moment().format('YYYY-MM-DD');

	return fetch(API.baseUrl+'games?date='+datesNow, API.options)
	.then(data => data.json())
	.then(data => {
		console.log("data from", datesNow, data)
		return data.response
	})
	.catch(err => console.error(err));

}