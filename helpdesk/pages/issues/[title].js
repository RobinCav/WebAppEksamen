import SupportItem from '@/components/SupportItem'
import IssueWithComments from '@/components/IssueWithComments'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'





export default function Home() {
  const [Issue, setIssue] = useState([])
  const [comments, setComments] = useState([])

  const router = useRouter()
  const {title} = router.query

  const getIssue = async () => {
      const response = await fetch('/api/issues/' + title )
      const data = await response.json()
      setIssue(data.data)
    
  }
  
  const getComments = async () => {
    const response = await fetch('/api/issues/' + title )
    const data = await response.json()
    setComments(data.data.comments)
  
}

 

  useEffect(() => getIssue(), [])
  useEffect(() => getComments(), [])

  return (
   <main>
 
    <IssueWithComments item={Issue} comments={comments} >

    </IssueWithComments>
    </main>
  );

}

