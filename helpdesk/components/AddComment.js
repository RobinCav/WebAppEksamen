import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';



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
     
          let data = JSON.stringify({
                   
            comment: comment,
            issueId: Issue.id       
          });
          console.log(data)
    
          const result = await axios.post("/api/comments",data,{headers:{"Content-Type" : "application/json"}});
          window.location.reload();
          const url = '/issues/'
          router.push(url)
          


      

    } catch (error) {
      console.error(error.response.data);     
    }
    
  };
  return (
    <div>
        <ul className="comment">
        
        <input type="text" value={comment} onChange={handleChange}  placeholder="Write a comment..." />
          
        <button type="button" onClick={createComment}>  OK </button>
          
      </ul>
    </div>
  
  )
}

export default AddComment
