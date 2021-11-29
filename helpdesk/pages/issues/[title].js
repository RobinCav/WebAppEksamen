import SupportItem from '@/components/SupportItem'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'





const getSupportItem = async (title) => {
  const response = await fetch('/api/issues/' + title)
  const data = await response.json()
  return data.data
}

export default function Home() {
  const [Issue, setIssue] = useState([])
  const router = useRouter()
  const {title} = router.query

  const getIssue = async () => {
      const response = await fetch('/api/issues/' + title )
      const data = await response.json()
      setIssue(data.data)
    
  }

  const getComment = async () => {
    const response = await fetch('/api/comments/'+ Issue.issueId  )
    const data = await response.json()
    setIssue(data.data)
  
}

  useEffect(() => getIssue(), [])
  return (
   <main>
    <SupportItem
    item= {Issue} >

    </SupportItem>
    </main>
  );

}

