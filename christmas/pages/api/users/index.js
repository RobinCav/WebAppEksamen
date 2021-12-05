import * as usersController from '@/features/users/users.controller'



export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'post':
      await usersController.createUser(req, res)
      break
    case 'get':
     await usersController.listUsers(req, res)
      
      break
    default:
      res.status(405).end()
    
  }

}