/* eslint-disable no-param-reassign */
/* eslint-disable no-ternary */
import { useCallback, useEffect, useState } from 'react'
import ColorPicker from './ColorPicker'
import Row from './Row'
import Solution from './Solution'
import { useGameContext } from '@/contexts/game-context'

const Rows = () => {

  const { state, dispatch } = useGameContext()
  const [ user, setUser ] = useState(0)

  // Henter hvilke bruker som spiller via api
  useEffect( async () => {
    const request = await fetch("http://localhost:3000/api/v1/user");
    const response = await request.json();
    if ( !response.success )
      console.log( response.message );
    setUser(response.user);
  },[])

  const isCurrentRow = useCallback(
    (rowNumber) => {
      return rowNumber === state?.currentRow
    },
    [state.currentRow]
  )

  const handleRowSubmit = async (event) => {
    event.preventDefault();

    // Henter hint ved row submit via api
    const request = await fetch('/api/v1/hint', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })

    const response = await request.json();
    if ( !response.success )
      console.log( response.message );

    const hints = response.hints
    const tries = state.currentRow + 1;

    dispatch({ type: 'set_hints', payload: { hints } });

    // Hvis det er 4 riktig position hint, så betyr det at spillet er løst
    if ( hints?.positions === 4 ) {

      // Lagrer antall forsøk brukeren brukte for å løse spillet
      const request = await fetch( 'http://localhost:3000/api/v1/game', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            combination: state.game.combination,
            user: user,
            tries: tries,
            completion: true
        })
      })

      const response = await request.json()
      if ( !response.success )
        console.log( response.message );

      dispatch({ type: 'set_complete' });

    }
    else {

      // Hvis brukeren har gjort 10 forsøk, så er det ikke flere forsøk
      // Lagrer at brukeren ikke klarte å løse spillet
      if ( tries == 10 ) {

        const request = await fetch( 'http://localhost:3000/api/v1/game', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              combination: state.game.combination,
              user: user,
              tries: tries,
              completion: false
          })
        })

        const response = await request.json()
        if ( !response.success )
          console.log( response.message );

      }

      dispatch({ type: 'increase_row' });
    }
  }

  const handleCellClick = (event) => {
    const { cell } = event.currentTarget.dataset
    if (state.currentColor) {
      dispatch({ type: 'set_row_colors', payload: { cell } })
    }
  }

  const handleSelectedColor = async (color) => {
    if (state?.currentColor === color) {
      dispatch({ type: 'reset_picked_color' })
    } else {
      dispatch({ type: 'picked_color', payload: { color } })
    }
  }

  return (
    <div className="rows">
      {state?.isComplete ? (
        <Solution
          row={state.rows[state.currentRow]}
          foundCombination={state?.foundCombination}
        />
      ) : null}
      {!state?.isComplete &&
        state?.rows?.map((row) => (
          <div className="row-wrapper" key={row?.name}>
            <form onSubmit={handleRowSubmit}>
              <div
                style={{
                  opacity: isCurrentRow(row?.number) ? 1 : 0.2,
                  pointerEvents: !isCurrentRow(row?.number) ? 'none' : 'auto',
                }}
              >
                <Row
                  name={row?.name}
                  number={row?.number}
                  hints={row?.hints}
                  pegs={row?.pegs}
                  cells={row?.cells}
                  handleCellClick={handleCellClick}
                />
                <button
                  disabled={state.selectedColors.length !== 4}
                  className=""
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
            {isCurrentRow(row?.number) ? (
              <ColorPicker
                colors={state?.remaningColors}
                selectedColor={state?.currentColor}
                handleSelectedColor={handleSelectedColor}
              />
            ) : null}
          </div>
        ))}
    </div>
  )
}

export default Rows