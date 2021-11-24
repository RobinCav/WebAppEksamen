import { useState } from "react";


const Luke = ({lukeData : {id, nr, text, open}, handleClick}) => {
  const [flip, setFlip] = useState(false)

  open = flip;

  return (
    <div className={`luke ${flip ? 'flip' : ''}` }onClick={() => setFlip(true)}>

      <div className="front">
        <p>{nr}</p>
      </div>

      <div className="back">
        <p>{text}</p>
      </div>
    </div>
  )



  
}


export default Luke;