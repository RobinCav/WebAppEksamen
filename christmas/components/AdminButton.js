import Link from 'next/link'


const AdminButton = () => {

  return (
   <button>
     <Link href="/adminPage">
      <a>Go to admin page</a>
     </Link>
   </button>
  )

}

export default AdminButton;