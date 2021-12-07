import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AddComment from './AddComment'
import axios from 'axios';


/* eslint-disable no-ternary */
const SupportItem = ({ item, comments }) => {
  const severityHigh = item?.severity === 3 ? 'Høy' : null
  const severityMedium = item?.severity === 2 ? 'Medium' : null
  const severityLow = item?.severity === 1 ? 'Lav' : null
  const [startComment, setStartComment]= useState(false)

  const router = useRouter()

  const goToSupportItem = async () => {
    const url = '/issues/' + item.title
    router.push(url)
  }
  const clickedComment = () => {
    setStartComment(true)
  }
  const solved = async () => {
    let data = JSON.stringify({
      isResolved: true,
    });
    const result =  await axios.put("/api/issues/" + item.title,data,{headers:{"Content-Type" : "application/json"}});
    console.log(result)

    window.location.reload();

  }
 
  return (
    <div>
      <li className="issue">
      <div className="meta">
      <span>{item?.department?.name}</span>
        <span className={severityHigh??severityMedium??severityLow}>{severityHigh ?? severityMedium ?? severityLow} <div className="circle"></div></span>
      </div>
      <h3>
        {item?.title} {item?.isResolved ? '(løst)' : null}
      </h3>
      <p>{item?.description}</p>
      <span>{item?.creator}</span>
      <footer>
        <span>{item?.created_at}</span>
        <div className="issue_actions">
          <button type="button" onClick= {goToSupportItem}>Se kommentarer ({comments})</button>
          <button type="button" onClick={clickedComment}>Legg til kommentar</button>
          <button type="button" onClick={solved}>Avslutt</button>
        </div>
      </footer>

     
      </li>
      {startComment ?
       <div className ="comment">
       <header>
          <h3>Legg til kommentar</h3>
          <button onClick={(e) =>{
            setStartComment(false)
          }}> X </button>
       </header>

       <AddComment issue={item} />

      </div>
      :
      null  }
    </div>
    
     
  )
}

export default SupportItem
