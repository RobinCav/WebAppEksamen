import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Dummydata
const games = [
  { combination: "RGFDF", user: "sdasdsa", numberOfTries: 5, foundCombination: true },
  { combination: "ASDFF", user: "sGHGFhga", numberOfTries: 2, foundCombination: false },
  { combination: "RGASSS", user: "sdas432545dsa", numberOfTries: 1, foundCombination: false }
];

const createGames = async () => {
  const gamesPromises = games.map( async (game) => {
    await prisma.game.create({ 
      data: { 
        ...game 
      } 
    })
  })
  console.log(gamesPromises);
  await Promise.all(gamesPromises);
}

async function main() {
  console.log('Start seeding ...')
  await createGames();
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
