import { useState } from "react";
import Superbonus from "./SuperbonusCard";



const AdminCard = ({title,Dato}) => {
const [superbonus, setSuperbonus] = useState(false);

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
        <tr>
          <td> 1</td>
          <td> ali </td>
          <td> 21.11.2021</td>
          <td className="unntak"> nxwonxownx </td>
        </tr>
      </tbody>
    </table>
    </article>
    {superbonus && <Superbonus setSuperbonus={setSuperbonus}/>}
    </div>



  );

};

export default AdminCard;