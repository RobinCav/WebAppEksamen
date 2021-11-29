import SupportItem from './SupportItem'
import { useState, useEffect } from 'react';

const SupportList = ({ issues }) => {


  const [departments, setDepartments] = useState([])

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('it');
  

  const getDepartments = async () => {
    const response = await fetch('/api/departments')
    const data = await response.json()
    setDepartments(data.data)
  }
   

  useEffect(() => getDepartments(), [])


  return (
    <section className="issues">

      <h2>Henvendelser</h2>
      <section>
        <div>
        <p> sorter etter avdeling </p>
          <select onChange={(e) => setSortType(e.target.value)}> 
            <option value="it">it</option>
            <option value="salg">salg</option>
            <option value="design">design</option>
          </select>
        </div>
      </section>
      <ul>
        {issues?.filter(issue => issue.department.name.includes(sortType)).map((issue) => (
          <SupportItem key={issue.id} item={issue} />
        ))}
      </ul>
    </section>
  )
}

export default SupportList
