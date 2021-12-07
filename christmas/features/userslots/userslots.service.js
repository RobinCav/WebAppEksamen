import * as userSlotRepo from './userslots.repository'


export const getUserSlotByCoupon = async ({ coupon }) => {
  const userslot = await userSlotRepo.findUnique({ coupon })

  if (!userslot.success) return { success: false, error: userslot.error }
  if (!userslot.data)
    return {
      success: false,
      type: 'userslot.NotExist',
      error: `userslot with ${coupon} does not exist`,
    }

  return { success: true, data: slot.data }
}
export const getToList = async () => {
  const userslot = await userSlotRepo.findMany({
  
  })

  if (!userslot.success) return { success: false, error: userslot.error }

  return { success: true, data: userslot.data }
}

export const create = async ({ coupon, slotId, userId  }) => {

  const createdUserSlot = await userSlotRepo.create({ coupon, slotId, userId })

  // feil ved lagring av bruker via ORM
  if (!createdUserSlot.success) return { success: false, error: createdUserSlot.error }

  return { success: true, data: createdUserSlot.data }
}

export const deleteById = async ({ id }) => {
 

  const removedUserSlot = await userSlotRepo.removeById(id)

  if (!removedUserSlot.success) return { success: false, error: removedUserSlot.error }

  return { success: true, data: removedUserSlot.data }
}

/*
export const putByTitle = async (title, data) => {
 

  const updateduser = await slotRepo.updateByTitle(title, data)

  if (!updateduser.success) {
    return { success: false, error: updateduser.error }
  }

  return { success: true, data: updateduser.data }
}
*/


export const exist = async ({ coupon }) => {
  try {
    const userslot = await prisma.userslot.findUnique({
      where: {
        ...coupon,
      },
    })

    return { success: true, data: userslot }
  } catch (error) {
    return { success: false, error: 'Failed finding userslot' }
  }
}