
import * as calendersController from '@/features/calenders/calenders.controller'

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      await calendersController.getCalenderByName(req, res)
      break
    case 'delete':
      await calendersController.removeCalenderById(req, res)
      break
      /*
    case 'put':
      await calendersController.updateIssuebyTitle(req, res)
      break
      */
    default:
      res.status(405).end()
  }
}