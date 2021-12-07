import Link from 'next/link'


const AdminButton = () => {

  return (
   <button>
     <Link href="/api/calenders">
      <a>Go to admin page</a>
     </Link>
   </button>
  )

}

export default AdminButton;