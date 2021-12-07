import Admin from "@/components/Admin";
import { useUser } from "@/hooks/useUser";


export default function AdminPage() {

const{admin} = useUser()

console.log(admin)


return(
  <div >
      {admin ? 
    <Admin /> :   <h1>Du er ikke en admin</h1>} 

  </div>
)




}

