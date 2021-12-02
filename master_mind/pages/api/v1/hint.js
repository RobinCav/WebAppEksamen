import * as gameService from '@/features/game/game.service'

export default async function handler(req, res) {

    if ( req.method == 'POST' ) {

        const state = req.body

        const hints = await gameService.generateHint( state );

        if ( hints != false ) {

            res.status(200).json({ hints: hints, success: true } )
        }
        else {

            res.status(400).json({ message: "Failed to create hints", success: false })
        }
    
    }
    else {

        res.status(403).json({ message: "Forbidden request", success: false })
    }
}