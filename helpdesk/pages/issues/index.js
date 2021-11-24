import SupportList from '@/components/SupportList.js'
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function Home(req, res) {
  const [Issues, setIssues] = useState([])

  const getIssues = async () => {
      const response = await fetch('/api/issues')
      const data = await response.json()
      setIssues(data.data)
    
  }

  useEffect(() => getIssues(), [])
  return (
   <main>
    <SupportList
    issues= {Issues} >

    </SupportList>
    </main>
  );



}