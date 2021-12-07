import SupportItem from '@/components/SupportItem'
import IssueWithComments from '@/components/IssueWithComments'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { getIssue } from '@/hooks/useIssues'





export default function Home() {
  
 const router = useRouter()

  

  
    return (
      <main>
        {router.isReady 
        ?
        <IssueWithComments item={getIssue(router.query).issue} comments={getIssue(router.query).comments} >
   
        </IssueWithComments>
        :
        null  
        }
      
       </main>
     );
  
  

}

function getQuery() {
  const router = useRouter();
  const ready = router.asPath !== router.route;
  if (!ready) return null;
  return router.query;
}