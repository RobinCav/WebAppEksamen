// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUserFromCookie } from '@/lib/utils/api'

export default async function handler(req, res) {
  // Funksjon brukt for å hente ut hvem som prøver applikasjone
  // Du kan kopiere denne linjen til dere du måtte trenge den
  // Trenger den for å knytte brukeren som spiller til spillet
  const user = await getUserFromCookie(req)

  var colorList = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'pink',
    'cyan',
    'gray',
  ]

  if (user) {
    console.log(user)
  }

  const colors = [];

  while ( colors.length < 4 ) {
    const index = Math.floor( Math.random() * colorList.length );

    if ( colors.length == 0 ) {
      colors.push( colorList[index] );
    
    } else {

      var exists = false;

      for ( var i = 0; i < colors.length; i++ ) {
        if ( colorList[index] == colors[i] ) {
          exists = true;
        }
      }

      if ( !exists ) {
        colors.push(colorList[index]);
      }

    }
  }

  res.status(200).json({ combination: colors, user: user })
}
