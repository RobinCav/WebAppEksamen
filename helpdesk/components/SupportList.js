import SupportItem from './SupportItem'
import { useState, useEffect } from 'react';

const SupportList = ({ issues }) => {


  const [sortType, setSortType] = useState('alle');
  
   



  return (
    <section className="issues">
      <header>
        <h2>Henvendelser</h2>
        <section>
            <select onChange={(e) => setSortType(e.target.value)}> 
              <option value="alle">Avdeling</option>
              <option value="it">it</option>
              <option value="salg">salg</option>
              <option value="design">design</option>
            </select>
        </section>

      </header>

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
