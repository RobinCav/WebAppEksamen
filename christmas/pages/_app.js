import '../styles/globals.scss'
import Footer from '@/components/Footer'
import AdminButton from '@/components/AdminButton'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <AdminButton/>
      <Footer />
    </div>
  )
}

export default MyApp
