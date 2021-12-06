import { useEffect, useState } from "react"



  const getSlot = (slug) =>{
    const[slot,setSlot] = useState([])

    const getS = async () => {
    
      const secResponse = await fetch('/api/slots/' + slug )
      const slotData = await secResponse.json()
      setSlot(slotData?.data)
    }
    useEffect(  () => {
       getS()}, [])

    
    return slot
  }

  export default getSlot

  
