
import * as usersController from '@/features/users/users.controller'

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      await usersController.getUserByTitle(req, res)
      break
    case 'delete':
      await usersController.removeUserByTitle(req, res)
      break
      /*
    case 'put':
      await usersController.updateIssuebyTitle(req, res)
      break
      */
    default:
      res.status(405).end()
  }
}