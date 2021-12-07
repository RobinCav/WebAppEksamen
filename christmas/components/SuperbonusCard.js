import { useUser } from "@/hooks/useUser";
import { useState } from "react";

const Superbonus = ({setSuperbonus, luke, users}) => {


  const randomWinner = () => {


    let uniqueUsers = [... new Set(users)];
    let randomItem = uniqueUsers[Math.floor(Math.random()*users.length)];
    let winner = randomItem?.username;
    return winner;

  }

  return (
    <div className="superbonusluke">
      <h1 className="superbonusHeader">Superbonus, {luke} </h1>
      <h1 className="close" onClick={() => setSuperbonus(false)}>X</h1>
      <h1 className="winner">{randomWinner()}</h1>
    </div>
  );

}

export default Superbonus