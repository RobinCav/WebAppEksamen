
import * as userSlotssController from '@/features/userslots/userslots.controller'

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      await userSlotssController.getUserSlotByCoupon(req, res)
      break
    case 'delete':
      await userSlotssController.removeUserSlotById(req, res)
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