import * as calendersController from '@/features/calenders/calenders.controller'



export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'post':
      await calendersController.createCalender(req, res)
      break
    case 'get':
     await calendersController.listCalenders(req, res)
      
      break
    default:
      res.status(405).end()
    
  }

}