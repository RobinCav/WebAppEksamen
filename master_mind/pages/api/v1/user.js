// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUserFromCookie } from '@/lib/utils/api'

export default async function handler(req, res) {

  const user = await getUserFromCookie(req)

  if ( user && req.method == "GET" ) {

    res.status(200).json({ user: user })

  } else {

    const response = {
      message: "Failed to get user data"
    };

    res.status(400).json(response)
  }

}