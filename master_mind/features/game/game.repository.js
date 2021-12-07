export async function saveGame( combination, user, tries, completion ) {
    const request = await fetch( 'http://localhost:3000/api/v1/game', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            combination: combination,
            user: user,
            tries: tries,
            completion: completion
        })
    })
    const response = request.json()
    if ( response.success )
        return response
    return false
}

export async function getHintFromApi( state ) {
    const request = await fetch('/api/v1/hint', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    })
    const response = await request.json();
    if ( response.success )
        return response.hints;
    return false;
}