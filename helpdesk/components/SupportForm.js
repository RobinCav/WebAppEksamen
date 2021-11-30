import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'







export default function SupportForm () {
  const [form, setForm] = useState({
    title: '',
    description: '',
    creator: '',
    severity: 1,
    department: 'it', 
    
  })

  const [departments, setDepartments] = useState([])

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


const validateForm = ( form ) => {
  let name = form.creator.split(' ')

  if(form.title === '' || form.description=== '' || form.creator === '' ){
    alert('You need to fill the required fields....(title,description and creator)')
    return false
   
  }else if(form.title.length <25 || form.title.length >150){
        alert('The title needs to contain between 25-150 characters')
        return false
  }else if(form.description.length < 25 || form.description.length > 250 ){
    alert('The description needs to contain between 25-250 characters')
    return false
  }else if(name.length <2 || firstCapLetter(name[0]) == false || firstCapLetter(name[1]) == false){
      alert('Navnet må inneholde både fornavn og etternavn(Begge må starte med stor bokstav')
      return false
  }else{
    return true
      }
    
 
    }
  


const firstCapLetter = (n) =>  n[0] === n[0].toUpperCase();

