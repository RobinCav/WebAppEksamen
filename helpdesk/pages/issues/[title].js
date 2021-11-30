import SupportItem from '@/components/SupportItem'
import IssueWithComments from '@/components/IssueWithComments'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'





export default function Home() {
  const [Issue, setIssue] = useState([])
  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(true);
  const router = useRouter()
  const {title} = router.query
  
  
  const getIssue = async () => {
      const response = await fetch('/api/issues/' + title )
      const data = await response.json()
      setIssue(data.data)
      setComments(data.data?.comments)
    
  }
  


 

  useEffect(() => getIssue(), [])
  

    return (
      <main>
    
       <IssueWithComments item={Issue} comments={comments} >
   
       </IssueWithComments>
       </main>
     );
  
  

}

