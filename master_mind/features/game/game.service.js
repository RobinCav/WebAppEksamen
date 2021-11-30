export async function getHints( state ) {

    const hints = { positions: 0, colors: 0 };
    const combination = state.game.combination;
    const picked_colors = state.selectedColors;

    for ( var i = 0; i < picked_colors.length; i++ ) {
        if ( picked_colors[i] == combination[i] ) {
            hints.positions++; 
        } else {
            for ( var j = 0; j < combination.length; j++ ) {
                if ( picked_colors[i] == combination[j] ) {
                    hints.colors++;
                    break;
                }
            }
        }
    }
    
    return hints;

}
