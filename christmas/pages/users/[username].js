import Footer from "@/components/Footer";
import Luker, { numbers } from "@/components/Luker"
import { useState, useEffect } from "react" 
import { useRouter } from 'next/router'

export default function Home() {

  const [isMounted, setMount] = useState(false);

  const [username, setUserName] = useState('')
  const router = useRouter();
 
  const query = getQuery();

  useEffect( async () => {
    if (!query) {
      return;
    }
    setUserName(query.username)
  }, [query]);


  useEffect(() => {
    setMount(true);
  },[]);


  return (
    <div>
      <h1>Julekalender eksamen 2021</h1>
      <h1> velkommen {username} </h1>
      {isMounted ? (
        <>
          <Luker username={username} />
        </>
      ): null}
    </div>
   
  )
}

function getQuery() {
  const router = useRouter();
  const ready = router.asPath !== router.route;
  if (!ready) return null;
  return router.query;
}