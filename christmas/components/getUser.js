



  const getUser =  (username) =>{
    const[user,setUser] = useState([])

    const getU = async () => {
      const response = await fetch('/api/users/' + username )
      const data = await response.json()
      setUser(data?.data)
  
    }
    useEffect(  () => {
       getU()
    }, 
    [])

    
    return user
  }

  export default getUser

