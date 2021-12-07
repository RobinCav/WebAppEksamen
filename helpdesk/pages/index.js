import SupportForm from '@/components/SupportForm'
import SupportList from '@/components/SupportList'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {

  const router = useRouter()
  return (
    <main className="home">
        <h1> WELCOME TO THE HELPDESK</h1>
        <section>
          <Link href='/issues/'>
              <button > 
                Se henvendelser 
              </button>
          </Link>

          <Link href='/issues/create'>
              <button >
                Lage henvendelse
              </button>
          </Link>

         

        </section>
    </main>
  )
}
