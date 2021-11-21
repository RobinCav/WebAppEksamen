// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

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

  if ( req.method == "GET" ) {

    // Lager en array med 4 unike farger
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

    res.status(200).json({ combination: colors })

  }
  else {

    const response = {
      message: "Failed to get combination"
    };

    res.status(400).json(response)

  }

}
