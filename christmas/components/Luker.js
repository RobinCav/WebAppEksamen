
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Luke from "./Luke";





const Luker = ({user}) =>{ 
  const[slots, setSlots] = useState([])


  const getSlots = async () =>{
    const response = await fetch('/api/slots')
    const data = await response.json()
    setSlots(data.data)

  }
  useEffect(() => getSlots(), [])


  return (
    <div className="luke-grid">
    {slots.map(luke =>
      <Luke
      key={luke.id} 
      lukeData = {luke}
      user={user}
      />)}
      </div>
    )
}


export default Luker;