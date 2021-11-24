import { useState, useEffect } from 'react';
import axios from 'axios';
import { create } from 'react-test-renderer';






export default function SupportForm () {
  const [form, setForm] = useState({
    title: '',
    description: '',
    creator: '',
    severity: '',
    created_at: '',
    department: null
    
  })

  const [departments, setDepartments] = useState([])


  const createIssue = async() =>{
    
    const issue = { title: form.title, description: form.description, creator: form.creator, severity:form.severity, created_at: "2020-03-09T22:18:26.625Z", department: form.department };
    axios.post('/api/issues', issue)
        .then(response => console.log(reponse));
  }

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
          <option>Høy</option>

          </select>
        
      </div>
      <button type="sumbit" onClick= {createIssue()}>Send henvendelse</button>
    </form>
  )
}

