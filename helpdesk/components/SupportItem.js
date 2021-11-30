import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AddComment from './AddComment'


/* eslint-disable no-ternary */
const SupportItem = ({ item }) => {
  const severityHigh = item?.severity === 3 ? 'Høy' : null
  const severityMedium = item?.severity === 2 ? 'Medium' : null
  const severityLow = item?.severity === 1 ? 'Lav' : null
  const [startComment, setStartComment]= useState(false)

  const [issue, setIssue] = useState([])
  const router = useRouter()

  const goToSupportItem = async () => {
    const url = '/issues/' + item.title
    router.push(url)
  }
  const test = () => {
    setStartComment(true)
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
          <button type="button" onClick= {goToSupportItem}>Se kommentarer (2)</button>
          <button type="button" onClick={test}>Legg til kommentar</button>
          <button type="button">Avslutt</button>
        </div>
      </footer>

      {startComment > 0 &&
        <AddComment/>
      }
    </li>
  )
}

export default SupportItem
