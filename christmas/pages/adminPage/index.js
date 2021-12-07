import Admin from "@/components/Admin";
import { useUser } from "@/hooks/useUser";


export default function AdminPage() {

const{admin} = useUser()

return(
  <div >
      {admin ? 
    <Admin /> :   <h1>Du har ikke tilgang til å se dette innholdet</h1>} 

  </div>
)




}

