import { useState, useEffect } from 'react'



/* eslint-disable no-ternary */
const AddComment = () => {

  const [comment, setComment] = useState('')

  const createComment = () => async () => {

    try {
     
          let data = JSON.stringify({
                   
            comment:       
          });
          console.log(data)
          console.log("dep id: " + dep.id)
          const result = axios.post("/api/issues",data,{headers:{"Content-Type" : "application/json"}});
          goBackToIssues()



      }

    } catch (error) {
      console.error(error.response.data);     
    }
    
  };
  return (
    <li className="comment">
   
      <input type="text"  placeholder="Write a comment..." onChange={}/>
        
      <button type="button" onclick={getInputValue}>  OK </button>
        
    </li>
  )
}

export default AddComment
