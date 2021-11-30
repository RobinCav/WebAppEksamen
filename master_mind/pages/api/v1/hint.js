import * as gameService from '@/features/game/game.service'

export default async function handler(req, res) {

    if ( req.method == 'POST' ) {

        const state = req.body

        const hints = await gameService.getHints( state );

        res.status(200).json( hints )
    
    }
    // TODO lag en else
}