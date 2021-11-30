import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'







export default function SupportForm () {
  const [form, setForm] = useState({
    title: '',
    description: '',
    creator: '',
    severity: 1,
    department: '', 
    
  })

  const [departments, setDepartments] = useState([])

  const router = useRouter()

  const goBackToIssues = async () => {
    const url = '/issues/'
    router.push(url)
  }
  
  
  const createIssue = () => async () => {

    try {
      console.log(form.department)
      for(let i=0; i < departments.length;i++){
        let dep = departments[i]
        if(dep.name == form.department){
        
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

    } catch (error) {
      console.error(error.response.data);     
    }
    
};


  const getDepartments = async () => {
    const response = await fetch('/api/departments')
    const data = await response.json()
    setDepartments(data.data)

  }
  useEffect(() => getDepartments(), [])


 
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
        />
      </div>
      <div>
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
        <select
        id="severity"
        name="severity"
        onChange={handleInputOnChange}
        value={form.severity}        onChange={handleInputOnChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>

          </select>
        
      </div>
      <button type="sumbit" onClick= {createIssue( )}>Send henvendelse</button>
    </form>
  )
}

