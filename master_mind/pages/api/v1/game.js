import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function game(req, res) {

    if ( req.method == 'POST' ) {

        const game = { 
            combination: req.body.combination, 
            user: req.body.user, 
            numberOfTries: req.body.tries, 
            foundCombination: req.body.completion
        };

        const insertion = await prisma.game.create({
            data: {
                ...game
            }
        })

        if ( Object.keys(insertion).length == 5 ) {
            res.status(200).json({ "success": true })
        } else {
            res.status(405).json({ "success": false })
        }

    }
}