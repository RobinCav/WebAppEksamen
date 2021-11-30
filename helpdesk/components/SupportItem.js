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
      title: item.title, 
      description: item.description,
      creator: item.creator,
      severity: item.severity,
      departmentId: item.departmentId
    });
    const result = axios.put("/api/issues/" + item.title,data,{headers:{"Content-Type" : "application/json"}});

  }
 
  return (
    <li className="issue">
      <div className="meta">
      <span>{item?.department?.name}</span>
        <span>{severityHigh ?? severityMedium ?? severityLow}</span>
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

      {startComment > 0 &&
        <AddComment title={item.title} />
      }
    </li>
  )
}

export default SupportItem
