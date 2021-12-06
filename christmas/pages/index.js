import Footer from "@/components/Footer";
import Luker, { numbers } from "@/components/Luker"
import { useState } from "react" 
import { useEffect } from "react"
import { useUser } from "@/hooks/useUser";

export default function Home() {

  const [isMounted, setMount] = useState(false);
  const { user } = useUser()

  useEffect(() => {
    setMount(true);
  },[]);

  return (
    <div>
      <h1>Julekalender eksamen 2021</h1>
      {isMounted ? (
        <>
          <Luker user={user}/>
        </>
      ): null}
    </div>
   
  )
}
