import { useUser } from "@/hooks/useUser";
import { useState } from "react";
import Superbonus from "./SuperbonusCard";


const AdminCard = ({title,Dato,userSlots}) => {

  const [superbonus, setSuperbonus] = useState(false);
  let users= []
  for(let i=0; i < userSlots.length; i++){
    users[i]= userSlots[i].user
  }
  

  console.log(userSlots)
  return (
    <div>
    <article className="luker">
      <h2 className="adminLukeTitle"> {title} </h2>
      <p className="tilgjengeligFra"> {Dato} </p>
      <div className="seOgTrekk">
        <p onClick={() => window.alert("hey")}> Se alle deltakelser ({4})</p>
        <p onClick={() => setSuperbonus(true)}> Trekk superbonus </p>
      </div>
      <table>
      <thead>
      <tr>
        <th> # </th>
        <th> Brukernavn </th>
        <th> Dato for deltakere </th>
        <th className="unntak"> Kode </th>
      </tr>
      </thead>
      <tbody>
        {userSlots?.map((us) => (
          <tr key={us.id}>
            <td>{us?.id}</td>
            <td>{us?.user?.username}</td>
            <td>{us?.user?.createdAt}</td>
            <td>{us.coupon}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </article>
    {superbonus && <Superbonus users={users} setSuperbonus={setSuperbonus} luke={title}/>}
    </div>



  );

};

export default AdminCard;