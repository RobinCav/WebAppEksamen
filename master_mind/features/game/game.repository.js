
import axios from 'axios';

export async function saveEntry( combination, user, tries, completion ) {
    console.log("repository called");

    axios.post('http://localhost:3000/api/v1/game', {
        combination: combination,
        user: user,
        tries: tries,
        completion: completion
    })
    .then(function (response) {

        console.log(response.data);
    })
    .catch(function (error) {

        console.log(error);
    });

}