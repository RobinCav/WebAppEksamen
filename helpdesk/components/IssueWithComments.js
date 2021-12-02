import Comment from './Comment'
import { useState, useEffect } from 'react';
import AddComment from './AddComment'




/* eslint-disable no-ternary */
const IssueWithComments = ({ item,comments }) => {
  const severityHigh = item?.severity === 3 ? 'Høy' : null
  const severityMedium = item?.severity === 2 ? 'Medium' : null
  const severityLow = item?.severity === 1 ? 'Lav' : null
  
  
  const [startComment, setStartComment]= useState(false)


  const clickedComment = () => {
    setStartComment(true)
  }

  
  return (
    <main>
      <div className="issue">
      <h2>
          {item?.title} 
        </h2>
        <div className="meta">
          <span>{item?.department?.name}</span>
          <span>{severityHigh ?? severityMedium ?? severityLow}</span>
        </div>
    
        <p>{item?.description}</p>
        <span>{item?.creator}</span>
        <footer>
          <span>{item?.created_at}</span>
          <div className="issue_actions">
            <button type="button" onClick={clickedComment}>Legg til kommentar</button>
            <button type="button">Avslutt</button>
          </div>
        </footer>
      </div>
      {startComment > 0 &&
        <AddComment title={item.title} />
      }
        <h2>Comments</h2>
        <div>
          {comments?.map((c) => (
            <Comment  item={c} />
          ))}
        </div>

        
    </main>
  

    

  )
}

export default IssueWithComments
