import * as userSlotssController from '@/features/userslots/userslots.controller'



export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'post':
      await userSlotssController.createUserSlot(req, res)
      break
    case 'get':
     await userSlotssController.listUserSlots(req, res)
      
      break
    default:
      res.status(405).end()
    
  }

}