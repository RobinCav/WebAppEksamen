import AdminCard from "./AdminCard";
import Superbonus from "./SuperbonusCard";
import { useUser } from "@/hooks/useUser";
import { userInfo } from "@/lib/utils/user";
import { getSlots } from "@/hooks/useSlots";


const Admin = () => {

  const {user, users} = useUser();
  const{slots} = getSlots()

  console.log(slots)

  const products = [
  {id:1, title: "Luke 1", Dato: "Tilgjengelig fra: 05.12.12", },
  {id:2,title: "Luke 2", Dato:"Tilgjengelig fra: 05.12.12",  }
  ]


  return (
    <div className="background">
   <h2 className="header_admin"> Admin som {user?.username}  </h2>
   <section className="adminCard">
    {slots?.map((slot) => (
      <AdminCard 
      Key={slot.id}
      title={slot.order}
      Dato={slot.openAt}
      userSlots={slot.userSlots}
      users={users}
      />
    ))}
  </section>
  </div>
  );

};

export default Admin;