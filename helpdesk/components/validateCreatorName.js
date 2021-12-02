const validateCreatorName = ( name ) => {

 if(name.length <2 || firstCapLetter(name[0]) == false || firstCapLetter(name[1]) == false){
      return false
  }else{
    return true
      }

    }
  


const firstCapLetter = (n) =>  n[0] === n[0].toUpperCase();

export default validateCreatorName
