import Luker, { numbers } from "@/components/Luker"
import { useState } from "react" 
import { useEffect } from "react"

export default function Home() {

  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  },[]);

  return (
    <div>
      <h1>Julekalender eksamen 2021</h1>
      {isMounted ? (
        <>
          <Luker/>
        </>
      ): null}
    </div>
  )
}
