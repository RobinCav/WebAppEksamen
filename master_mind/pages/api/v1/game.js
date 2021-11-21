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

        res.status(200).json({ result: game })
    }

}