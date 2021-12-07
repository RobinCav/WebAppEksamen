import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import validateForm from './validateForm'
import { getDepartments } from '@/hooks/useDepartments';







export default function SupportForm () {
  const [form, setForm] = useState({
    title: '',
    description: '',
    creator: '',
    severity: 1,
    department: 'it', 
    
  })

  const [departments, setDepartments] = useState([])
  useEffect(() => setDepartments(getDepartments()), [])

  const router = useRouter()

  const goBackToIssues = async () => {
    const url = '/issues/'
    router.push(url)
  }
  
  
  const createIssue = () => async () => {
      console.log(form.department)
      for(let i=0; i < departments.length;i++){
        let dep = departments[i]
        if(dep.name == form.department){
         
            if(validateForm(form) ){
              let data = JSON.stringify({
                    
                title: form.title, 
                description: form.description,
                creator: form.creator,
                severity: parseInt(form.severity),
                departmentId: dep.id
              });
              console.log(data)
              console.log("dep id: " + dep.id)
              const result = axios.post("/api/issues",data,{headers:{"Content-Type" : "application/json"}});
              
              goBackToIssues()
            }
          
        }

      }
    
};


 
  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value }))

  const handleSendSupport = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <form className="support_form" onSubmit={handleSendSupport}>
      <h2>Ny henvendelse</h2>
      <div>
        <label htmlFor="title">Tittel</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleInputOnChange}
          value={form.title}
          required
        />
      </div>
      <div>
        <label htmlFor="creator">Navn</label>
        <input
          type="text"
          id="creator"
          name="creator"
          onChange={handleInputOnChange}
          value={form.creator}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Beskrivelse</label>
        <textarea
          type="text"
          id="description"
          name="description"
          onChange={handleInputOnChange}
          value={form.description}
          required
        />
      </div>
      <div>
        <label htmlFor="department">Department</label>
        <select 
         id="department"
         name="department"
         onChange={handleInputOnChange}
         value={form.department}        onChange={handleInputOnChange}>
        {departments?.map((department) => (
          <option>  {department.name} </option>
        ))}        </select>
      </div>
      <div>
        <label htmlFor="severity">Severity</label>
        <select
        id="severity"
        name="severity"
        onChange={handleInputOnChange}
        value={form.severity}        onChange={handleInputOnChange}>
          <option value='1'>lav</option>
          <option value='2'>middels</option>
          <option value='3'>høy</option>

        </select>
        
      </div>
      <button type="sumbit" onClick= {createIssue( )}>Send henvendelse</button>
    </form>
  )
}


