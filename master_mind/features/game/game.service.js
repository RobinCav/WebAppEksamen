export async function generateHint( state ) {

    if ( state.game.combination.length === 4 && state.selectedColors.length === 4 ) {

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

    } else {
        
        return false;
    }

}

export function combinationArrayToString( combination ) {
    var combination_string = "";
    for ( var i = 0; i < combination.length; i++ ) {
        combination_string += combination[i] + " ";
    }
    combination_string = combination_string.trim();
    return combination_string;
}