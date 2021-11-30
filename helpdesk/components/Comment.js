import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


/* eslint-disable no-ternary */
const Comment = ({ item }) => {

  return (
    <ul className="issue">
   
      <p>{item?.comment}</p>
      <footer>
        <span>{item?.created_at}</span>
      </footer>
    </ul>
  )
}

export default Comment
