import * as UserSlotsService from './userslots.service'



export const listUserSlots = async (req, res) => {
  const UserSlots = await UserSlotsService.getToList()

  if (UserSlots.error) return res.status(500).json(UserSlots.error)

  return res.status(200).json(UserSlots)
}

/*
export const updateUserSlotbyTitle = async (req, res) => {
  const { title } = req.query
  const data = req.body

  if (!title)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title',
    })

    const UserSlot = await UserSlotsService.putByTitle(title, data)

    if (!UserSlot?.success) {
      switch (UserSlot?.type) {
        case 'UserSlot.NotExist':
          return res.status(404).json({
            success: false,
            error: UserSlot.error,
          })
        case 'UserSlot.Duplicate':
          return res.status(409).json({
            success: false,
            error: UserSlot.error,
          })
        default:
          return res.status(500).json({
            success: false,
            error: UserSlot.error,
          })
      }
  }
}
*/
export const createUserSlot = async (req, res) => {
  const { coupon, slotId, userId} = req.body

  if (!coupon || !slotId || !userId)
    return res
      .status(400)
      .json({ success: false, error: 'Du må fille alle påkrevde felter....(coupon, slotId, userId..)' })
  
    


  const createdUserSlot = await UserSlotsService.create({ 
    coupon, slotId, userId
    })

  // 500 Internal Server Error hvis noe går galt
  if (!createdUserSlot?.success) {
    return res.status(500).json({
      success: false,
      error: createdUserSlot.error,
    })
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdUserSlot.data,
  })
}


export const getUserSlotByCoupon= async (req, res) => {
  const { coupon } = req.query

  if (!coupon)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: coupon',
    })

  const UserSlot = await UserSlotsService.getUserSlotByCoupon({
    coupon,
  })

  if (!UserSlot?.success) {
    switch (UserSlot?.type) {
      case 'UserSlot.NotExist':
        return res.status(404).json({
          success: false,
          error: UserSlot.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: UserSlot.error,
        })
    }
  }

  return res.status(200).json(UserSlot)
}


export const removeUserSlotById = async (req, res) => {
  const { id } = req.query

  if (!id)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: ',
    })

  const removedUserSlot = await UserSlotsService.deleteById({
    id,
  })

  if (!removedUserSlot?.success) {
    switch (removedUserSlot?.type) {
      case 'UserSlot.NotExist':
        return res.status(404).json({
          success: false,
          error: removedIssue.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: removedUserSlot.error,
        })
    }
  }

  return res.status(204).end()
}