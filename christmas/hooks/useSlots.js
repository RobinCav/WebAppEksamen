import { useEffect, useState } from 'react'

import axios from 'axios'


export const getSlot = ({slug}) => {
  const [slot, setSlot] = useState([])

 

  useEffect(() => {
    if (slot && slot.length > 0) return
    const getSlot = async () => {
      try {
        const response = await axios('/api/slots/' + slug)

        if (response?.data?.success) {
          setSlot(response.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getSlot()
  }, [slot])



  return { slot }
}


export const getSlots = () => {
  const [slots, setSlots] = useState([])

 

  useEffect(() => {
    if (slots && slots.length > 0) return
    const getAllSlots = async () => {
      try {
        const response = await axios('/api/slots/')

        if (response?.data?.success) {
          setSlots(response.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getAllSlots()
  }, [slots])



  return { slots }
}