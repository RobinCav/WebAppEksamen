import * as gameService from '@/features/game/game.service'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function game(req, res) {

    if ( req.method == 'POST' ) {

        // COnvert color array to string
        const combination_string = gameService.combinationArrayToString( req.body.combination );

        // Insert game to store
        const game = { 
            combination: combination_string, 
            user: req.body.user, 
            numberOfTries: req.body.tries, 
            foundCombination: req.body.completion
        };
        const insertion = await prisma.game.create({
            data: {
                ...game
            }
        })
        
        /*
            Fikk "prisma can not run in the browser" error når jeg prøvde å lagre
            game gjennom repository klassen. Derfor gjorde jeg lagringen direkte 
            her i api.
        */

        if ( Object.keys(insertion).length == 5 ) {

            res.status(201).json({ message: "Game saved successfully", success: true })
        } else {
            
            res.status(400).json({ message: "Failed to insert into database", success: false })
        }

    } else {

        res.status(403).json({ message: "Forbidden request", success: false })
    
    }

}