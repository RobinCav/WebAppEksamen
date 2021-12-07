
import { useEffect, useState } from 'react'

import axios from 'axios'



export const getDepartments = () => {
  const [departments, setDepartments] = useState([])


  useEffect(() => {
    if (departments && departments.length > 0) return
    const getAllDepartments = async () => {
      try {
        const response = await fetch('/api/departments/')
        const data = await response.json()
        if (response?.data?.success) {
          setDepartments(data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getAllDepartments()
  }, [departments])



  return { departments }
}