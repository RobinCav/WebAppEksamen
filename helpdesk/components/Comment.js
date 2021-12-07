import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


/* eslint-disable no-ternary */
const Comment = ({ item }) => {

  return (
    <div className="issue">
   
      <p>{item?.comment}</p>
      <footer>
        <span>{item?.created_at}</span>
      </footer>
    </div>
  )
}

export default Comment
