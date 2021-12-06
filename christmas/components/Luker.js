
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Luke from "./Luke";



/*
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




*/


const Luker = ({username}) =>{ 
  const[slots, setSlots] = useState([])

  const router = useRouter();

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
      username={username}
      />)}
      </div>
    )
}


export default Luker;