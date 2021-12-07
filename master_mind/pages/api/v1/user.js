// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUserFromCookie } from '@/lib/utils/api'

export default async function handler(req, res) {

  if ( req.method == "GET" ) {

    const user = await getUserFromCookie(req)
    res.status(200).json({ user: user, success: true })

  } else {

    res.status(403).json({ message: "Forbidden request", success: false })
    
  }

}