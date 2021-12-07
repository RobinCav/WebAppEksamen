
import * as slotsController from '@/features/slots/slots.controller'

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      await slotsController.getSlotBySlug(req, res)
      break
    case 'delete':
      await slotsController.removeSlotById(req, res)
      break
      /*
    case 'put':
      await slotsController.updateIssuebyTitle(req, res)
      break
      */
    default:
      res.status(405).end()
  }
}