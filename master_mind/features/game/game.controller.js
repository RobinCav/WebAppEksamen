
import * as gameRepository from '@/features/game/game.repository'

export async function processGame( combination, user, tries, completion ) {

    if ( (user.length>0) && (tries>0) && (completion==true || completion==false) ) {

        // Gjort array som inneholder fargekombinasjoner om til string
        var combination_string = "";
        for ( var i = 0; i < combination.length; i++ ) {
            combination_string += combination[i] + " ";
        }
        combination_string = combination_string.trim();

        const result = await gameRepository.saveEntry( combination_string, user, tries, completion );

    }
}