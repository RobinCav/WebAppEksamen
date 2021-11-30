import SupportForm from '@/components/SupportForm'
import SupportList from '@/components/SupportList'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()
  return (
    <main className="home">
        <h1> WELCOME TO THE HELPDESK</h1>
        <section>
          <button onClick={ ()=>{
            const url = '/issues/'
            router.push(url)
          }
              
          }> Se henvendelser 
          </button>

          <button onClick={ ()=>{
            const url = '/issues/create'
            router.push(url)
          }
              
          }>
             Lage henvendelse
          </button>

        </section>
    </main>
  )
}
