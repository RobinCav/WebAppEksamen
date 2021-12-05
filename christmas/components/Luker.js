
import { useState, useEffect } from "react";
import Luke from "./Luke";


export const getRandomString = () => {
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


export const luker = [
  {
    id: "hatch-1",
    order: 1,
    text: "",
    open: false,
  },
  {
    id: "hatch-2",
    order: 2,
    text: "",
    open: false
  },
  {
    id: "hatch-3",
    order: 3,
    text: "",
    open: false
  },
  {
    id: "hatch-4",
    order: 4,
    text: "",
    open: false
  },
  {
    id: "hatch-5",
    order: 5,
    text: "",
    open: false
  },
  {
    id: "hatch-6",
    order: 6,
    text: "",
    open: false
  },
  {
    id: "hatch-7",
    order: 7,
    text: "",
    open: false
  },
  {
    id: "hatch-8",
    order: 8,
    text: "",
    open: false
  },
  {
    id: "hatch-9",
    order: 9,
    text: "",
    open: false
  },
  {
    id: "hatch-10",
    order: 10,
    text: "",
    open: false
  },
  {
    id: "hatch-11",
    order: 11,
    text: "",
    open: false
  },
  {
    id: "hatch-12",
    order: 12,
    text: "",
    open: false
  },
  {
    id: "hatch-13",
    order: 13,
    text: "",
    open: false
  },
  {
    id: "hatch-14",
    order: 14,
    text: "",
    open: false
  },
  {
    id: "hatch-15",
    order: 15,
    text: "",
    open: false
  },
  {
    id: "hatch-16",
    order: 16,
    text: "",
    open: false
  },
  {
    id: "hatch-17",
    order: 17,
    text: "",
    open: false
  },
  {
    id: "hatch-18",
    order: 18,
    text: "",
    open: false
  },
  {
    id: "hatch-19",
    order: 19,
    text: "",
    open: false
  },
  {
    id: "hatch-20",
    order: 20,
    text: "",
    open: false
  },
  {
    id: "hatch-21",
    order: 21,
    text: "",
    open: false
  },
  {
    id: "hatch-22",
    order: 22,
    text: "",
    open: false
  },
  {
    id: "hatch-23",
    order: 23,
    text: "",
    open: false
  },
  {
    id: "hatch-24",
    order: 24,
    text: "",
    open: false
  },
];







const Luker = () =>{ 
  const[slots, setSlots] = useState([])
  let slotsCouponArr = []

  const getSlots = async () =>{
    const response = await fetch('/api/slots')
    const data = await response.json()
    setSlots(data.data)
  }
  useEffect(() => getSlots(), [])

  const connectWithApi = () =>{
    for (let i = 0; i < slots.length; i++){
      luker[i] = slots[i]
    }
    for (let i = 0; i <= slots.length; i++){
      slotsCouponArr.push( getRandomString())
    }
  }

  
  connectWithApi()
  
  return (
    <div className="luke-grid">
    {luker.map(luke =>
      <Luke
      key={luke.id} 
      lukeData = {luke}
      coupons = {slotsCouponArr}
      />)}
      </div>
    )
}


export default Luker;