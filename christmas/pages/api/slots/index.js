import * as slotsController from '@/features/slots/slots.controller'



export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'post':
      await slotsController.createSlot(req, res)
      break
    case 'get':
     await slotsController.listSlots(req, res)
      
      break
    default:
      res.status(405).end()
    
  }

}