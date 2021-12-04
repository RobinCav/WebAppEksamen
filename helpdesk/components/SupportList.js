import SupportItem from './SupportItem'
import { useState, useEffect } from 'react';

const SupportList = ({ issues }) => {


  const [departments, setDepartments] = useState([])

  const [sortType, setSortType] = useState('alle');
  
   



  return (
    <section className="issues">

      <h2>Henvendelser</h2>
      <section>
        <div>
        <p> vis etter avdeling </p>
          <select onChange={(e) => setSortType(e.target.value)}> 
            <option value="alle">alle</option>
            <option value="it">it</option>
            <option value="salg">salg</option>
            <option value="design">design</option>
          </select>
        </div>
      </section>

      <ul>
        {sortType.includes('alle') ?        issues?.map((issue) => (
          <SupportItem key={issue.id} item={issue} comments={issue?.comments?.length} />
        ))
        : 
        issues?.filter(issue => issue.department.name.includes(sortType)).map((issue) => (
          <SupportItem key={issue.id} item={issue} comments={issue?.comments?.length} />
        ))}
      
      </ul>
    </section>
  )
}

export default SupportList
