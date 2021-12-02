import validateCreatorName from "./validateCreatorName"

const validateForm = ( form ) => {
  let name = form.creator.split(' ')

  if(form.title === '' || form.description=== '' || form.creator === '' ){
    alert('Du må fille alle påkrevde felter....(title,description and creator osv)')
    return false
   
  }else if(form.title.length <25 || form.title.length >150){
        alert('Tittelen må inneholde 25-150 bokstaver')
        return false
  }else if(form.description.length < 25 || form.description.length > 250 ){
    alert('Beskrivelsen må inneholde 25-250 bokstaver')
    return false
  }else if(!validateCreatorName(name)){
      alert('Navnet må inneholde både fornavn og etternavn(Begge må starte med stor bokstav)')
      return false
  }else{
    return true
      }
    
    }
  



export default validateForm