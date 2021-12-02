import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios'

const Luke = ({lukeData : {id, nr, text, open}}) => {

  let test = new Date(2020, 11, 13)
  let testDag = today.getDate();

  const [flip, setFlip] = useState(false);
  const flipCard = () => {
    if (nr <= testDag)
    setFlip(true)
  }

  const [shake, setShake] = useState(false);
  const shakeCard = () => {
    // Button begins to shake
    setShake(true);
    
    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 1000);
  }

  open = flip;

  // Bestemmer om det skal lages en luke som kan åpnes, eller ikke
  if (nr <= testDag){

    // Denne luken kan åpnes
    return (
      <div className={`luke ${flip ? 'flip' : ''}` } onClick={flipCard}>
  
        <div className="front" >
          <p className="nmbr">{nr}</p>
        </div>
  
        <div className="back">
           <p>{text}</p>
        </div>
  
      </div>
    )
  }

  //Denne luken kan ikke åpnes
  return (
    <div className={shake ? "shake" : "luke"}  style={{background : "#e2e2e2"}} onClick={shakeCard}>

      <div className="front" >
        <p className="nmbrClosed">{nr}</p>
        <p className="openSoon">Åpnes om {nr - testDag} dager</p>
      </div>
    </div>
  )
}


export default Luke;