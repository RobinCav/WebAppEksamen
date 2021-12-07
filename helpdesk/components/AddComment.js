import { useState, useEffect } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { getIssue } from '@/hooks/useIssues';



/* eslint-disable no-ternary */
const AddComment = ({issue}) => {

  const [comment, setComment] = useState('')
  const router = useRouter()


  const handleChange= (event) =>{
      setComment(event.target.value)
   
  }
  const createComment  = async () => {
   
    try {
        if(comment.length <250 && comment.length> 0){

          let data = JSON.stringify({
                   
            comment: comment,
            issueId: issue.id       
          });
          console.log(data)
    
          const result = await axios.post("/api/comments",data,{headers:{"Content-Type" : "application/json"}});
          router.reload(window.location.pathname)

         
        }else{
          alert("kommentaren bør ikke være tom og maks ha 250 bokstaver")
        }

    } catch (error) {
      console.error(error.response.data);     
    }
    
  };

   
  return (
    <div>
        
       <main>
          <input type="text" value={comment} onChange={handleChange}  placeholder="Skriv en kommentar..." required />
       </main>
       <footer>
         <button type="button" onClick={createComment}>  Send </button>
       </footer>
     
    </div>
  
  )
}

export default AddComment
