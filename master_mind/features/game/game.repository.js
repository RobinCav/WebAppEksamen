
import axios from 'axios';

export async function saveEntry( combination, user, tries, completion ) {

    axios.post('http://localhost:3000/api/v1/game', {
        combination: combination,
        user: user,
        tries: tries,
        completion: completion
    })
    .then(function (response) {
        if ( response.data.success == false ) {
            return false;
        }
        return true;
    })
    .catch(function (error) {
        console.log(error);
    });
    
}