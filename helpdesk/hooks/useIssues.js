
import { useEffect, useState } from 'react'

import axios from 'axios'


export const getIssue = ({title}) =>{
  const [issue, setIssue] = useState([])
  const[comments,setComments] = useState([])


  useEffect(() => {
    const getIssue = async () => {
      try {
        const response = await axios('/api/issues/' + title)
        if (response?.data?.success) {
          setIssue(response.data.data)
          setComments(response.data.data.comments)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getIssue()
  }, [issue, comments])

  return{issue, comments}
}

export const getIssues = () => {
  const [issues, setIssues] = useState([])


  useEffect(() => {
    if (issues && issues.length > 0) return
    const getAllIssues = async () => {
      try {
        const response = await axios('/api/issues/')
        if (response?.data?.success) {
          setIssues(response.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getAllIssues()
  }, [issues])



  return { issues }
}