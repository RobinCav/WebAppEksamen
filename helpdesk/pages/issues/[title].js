import SupportItem from '@/components/SupportItem'
import IssueWithComments from '@/components/IssueWithComments'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'





export default function Home() {
  const [Issue, setIssue] = useState([])
  const [comments, setComments] = useState([])
  const [title, setTitle] = useState('')
  const router = useRouter();
 
  const query = getQuery();

  useEffect( async () => {
    if (!query) {
      return;
    }
    await getIssue(query.title)
  }, [query]);

 
  const getIssue = async (title) => {
      const response = await fetch('/api/issues/' + title )
      const data = await response.json()
      setIssue(data.data)
      setComments(data.data?.comments)
    
  }
  


 

  

    return (
      <main>
    
       <IssueWithComments item={Issue} comments={comments} >
   
       </IssueWithComments>
       </main>
     );
  
  

}

function getQuery() {
  const router = useRouter();
  const ready = router.asPath !== router.route;
  if (!ready) return null;
  return router.query;
}