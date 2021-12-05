import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'


const Luke = ({lukeData : {id,slug,order, openAt}}) => {

  const query = getQuery();
  const [username, setUserName] = useState('')
  const[user, setUser] = useState([])

  useEffect( async () => {
    if (!query) {
      return;
    }
    setUserName(query.username)
  }, [query]);


  const getUser = async () => {
    const response = await fetch('/api/users/' + username )
    const data = await response.json()
    setUser(data.data)
  
}

  const getRandomString = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomNumb = '0123456789';
    let result = '';
    for ( let i = 0; i < 4; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    for ( let i = 0; i < 4; i++ ) {
      result += randomNumb.charAt(Math.floor(Math.random() * randomNumb.length));
  }
    return result
  }

  const saveCoupon = async () =>{
    let data = JSON.stringify({
                   
      coupon: coupon,
      slotId: 1,
      userId: user.userId
    });
    console.log(data)
    const result = await axios.post("/api/userslots/",data,{headers:{"Content-Type" : "application/json"}});
    router.reload() 
  }

  let today = new Date()
  let testDag = today.getDate();
  const[coupon, setCoupon] = useState('')


  const [flip, setFlip] = useState(false);
  const flipCard = async () => {
    if (order <= testDag)
      setFlip(true)
      setCoupon(getRandomString())
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
  if (order <= testDag){

    // Denne luken kan åpnes
    return (
      <div className={`luke ${flip ? 'flip' : ''}` } onClick={flipCard}>
  
        <div className="front" >
          <p className="nmbr">{order}</p>
        </div>
  
        <div className="back">
           <p>{coupon}</p>
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

function getQuery() {
  const router = useRouter();
  const ready = router.asPath !== router.route;
  if (!ready) return null;
  return router.query;
}

export default Luke;