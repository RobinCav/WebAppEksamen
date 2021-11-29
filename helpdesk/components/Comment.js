import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


/* eslint-disable no-ternary */
const Comment = ({ item }) => {

  return (
    <li className="issue">
   
      <p>{item?.comment}</p>
      <footer>
        <span>{item?.created_at}</span>
      </footer>
    </li>
  )
}

export default Comment
