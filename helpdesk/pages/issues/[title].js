import SupportItem from '@/components/SupportItem'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'





const getSupportItem = async (title) => {
  const response = await fetch('/api/issues/' + title)
  const data = await response.json()
  return data.data
}

export default async function Home () {
  
  const [issue, setIssue] = useState([])
  const router = useRouter()
  const {title} = router.query

  const test = await getSupportItem(title)
  console.log(test)
  /*
  useEffect( async() =>{
    async function fetchMyAPI() {
      const is = await getSupportItem(title)

      setIssue(is)
      console.log(getSupportItem(is))
    }
   
      fetchMyAPI()

  } , [])

  */
 


  return (
    <main>
      </main>
  )
}
