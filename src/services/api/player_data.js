import API from "./config";


export default function getPlayerById(id_player){
/* on concatene la chaine de caractere */
	return fetch(API.baseUrl+'players?id='+id_player, API.options)
		.then(response => response.json())
		.then(response => {console.log(response)
		return response})
		.catch(err => console.error(err));
}










































/////////////////////////NOTE CLASS////////////////////////////////////////////////
/* resolve is called if the function has passed through
while reject is called if the function did not pass. */

/* const myPromise = new Promise(
    (resolve, reject) =>{
        player_name()
        resolve()
}) */

//myPromise() //asynchrone function 



//specifies that the async function was executed once :

/* myPromise().then(
	() => { console.log("Done !")}
).except(
	() => { console.log("Failed !") }
)
 */
////////////////////////////////////////////////////////////////////////////////////