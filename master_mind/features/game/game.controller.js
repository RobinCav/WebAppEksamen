
import * as gameRepository from '@/features/game/game.repository'

export function processGame( combination, user, tries, completion ) {
    console.log("controller called");

    if ( user.length > 0 && tries > 0 && ( completion == true || completion == false ) ) {

        var combination_string = "";
        for ( var i = 0; i < combination.length; i++ ) {
            combination_string += combination[i] + " ";
        }
        combination_string = combination_string.trim();

        gameRepository.saveEntry( combination_string, user, tries, completion );
    }

}