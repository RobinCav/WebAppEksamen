import AdminCard from "./AdminCard";
import Superbonus from "./SuperbonusCard";
import { useUser } from "@/hooks/useUser";
import { userInfo } from "@/lib/utils/user";
import { getSlots } from "@/hooks/useSlots";


const Admin = () => {

  const {user, users} = useUser();
  const{slots} = getSlots()

  console.log(slots)


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