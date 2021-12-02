
import * as gameRepository from '@/features/game/game.repository'
import * as gameService from '@/features/game/game.service'

export async function saveGame( combination, user, tries, completion ) {

    if ( (user.length>0) && (tries>0) && (completion==true || completion==false) ) {

        // Gjort array som inneholder fargekombinasjoner om til string
        const combination_string = gameService.combinationArrayToString( combination );
        gameRepository.saveGame( combination_string, user, tries, completion );

    }
}

export async function getUser() {
    return gameRepository.getUserFromApi();
}

export async function getHint(state) {
    return gameRepository.getHintFromApi(state)
}