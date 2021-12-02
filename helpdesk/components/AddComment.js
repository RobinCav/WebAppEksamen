import { useState, useEffect } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'



/* eslint-disable no-ternary */
const AddComment = ({title}) => {

  const [comment, setComment] = useState('')
  const router = useRouter()

  const [Issue, setIssue] = useState([])


  const getIssue = async () => {
      const response = await fetch('/api/issues/' + title )
      const data = await response.json()
      setIssue(data.data)
    
  }
  
  useEffect(() => getIssue(), [])

  const handleChange= (event) =>{
      setComment(event.target.value)
   
  }
  const createComment  = async () => {
    console.log(Issue.title)
    try {
        if(comment.length <250){

          let data = JSON.stringify({
                   
            comment: comment,
            issueId: Issue.id       
          });
          console.log(data)
    
          const result = await axios.post("/api/comments",data,{headers:{"Content-Type" : "application/json"}});
          router.reload(window.location.pathname)

         
        }else{
          alert("kommentaren bør være 250 bokstaver langt")
        }

    } catch (error) {
      console.error(error.response.data);     
    }
    
  };

  const url = '/issues/' + title
  return (
    <div>
        <ul className="comment">
        
        <input type="text" value={comment} onChange={handleChange}  placeholder="Write a comment..." required />
        
        <button type="button" onClick={createComment}>  OK </button>
          
      </ul>
    </div>
  
  )
}

export default AddComment
