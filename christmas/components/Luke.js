import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import { getRandomString } from "./getRandomString";



const Luke = ({lukeData : {id,slug,order, openAt}, user}) => {

  const isSlotAlreadyOpened =  () =>{
    let firstUserSlot =  user?.userSlots
    userSlot = firstUserSlot?.filter(userslot => userslot.slotId == slot.id)
    if(!userSlot?.length){
      console.log("not opened  ")
      return false
    }else{
      console.log(" opened  " + userSlot.id)
      return true
    }
}

  

  const[slot, setSlot] = useState([])
  let userSlot = null
  let today = new Date()
  let testDag = today.getDate();
  const[coupon, setCoupon] = useState('')
  const router = useRouter()

  

  const getSlot = async () => {
    const secResponse = await fetch('/api/slots/' + slug )
    const slotData = await secResponse.json()
    setSlot(slotData?.data)
  }
  useEffect(() => getSlot(), [])


  useEffect(() => {
    setCoupon(getRandomString())
  }, [])
  

  const saveCoupon = async () =>{
    if(!isSlotAlreadyOpened()){

      let data = JSON.stringify({
                   
        coupon: coupon,
        slotId: slot?.id,
        userId: user?.id
      });
      const result = await axios.post("/api/userslots",data,{headers:{"Content-Type" : "application/json"}});

      console.log("sssss")

    }
    
  }


  const [flip, setFlip] = useState(false);
  const flipCard = async () => {
    if (order <= testDag )
      setFlip(true)
      await saveCoupon()
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
  if (order <= testDag && !isSlotAlreadyOpened()  ){

    // Denne luken kan åpnes
    return (
      <div className={`luke ${flip ? 'flip' : ''}` } onClick={!isSlotAlreadyOpened() ? flipCard : null}>
  
        <div className="front" >
          <p className="nmbr">{order}</p>
        </div>
  
        <div className="back">
           <p>{coupon}</p>
        </div>
  
      </div>
    )
  }


  if(isSlotAlreadyOpened()){
    
    return (
      <div className='luke flip' onClick={flipCard}>

        <div className="back">
            <p  >{userSlot[0].coupon}</p>
        </div>
      </div>
    )
  }
  //Denne luken kan ikke åpnes
  return (
    <div className={shake ? "shake" : "luke"}  style={{background : "#e2e2e2"}} onClick={shakeCard}>

      <div className="front" >
        <p className="nmbrClosed">{order}</p>
        <p className="openSoon">Åpnes om {order - testDag} dager</p>
      </div>
    </div>
  )
}


export default Luke;