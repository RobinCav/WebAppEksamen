import * as slotRepo from './slots.repository'


export const getSlotBySlug = async ({ slug }) => {
  const slot = await slotRepo.findUnique({ slug })

  if (!slot.success) return { success: false, error: slot.error }
  if (!slot.data)
    return {
      success: false,
      type: 'slot.NotExist',
      error: `slot with ${slug} does not exist`,
    }

  return { success: true, data: slot.data }
}
export const getToList = async () => {
  const slot = await slotRepo.findMany()

  if (!slot.success) return { success: false, error: slot.error }

  return { success: true, data: slot.data }
}

export const create = async ({ username  }) => {

  const createduser = await slotRepo.create({ username })

  // feil ved lagring av bruker via ORM
  if (!createduser.success) return { success: false, error: createduser.error }

  return { success: true, data: createduser.data }
}

export const deleteById = async ({ id }) => {
 

  const removeduser = await slotRepo.removeById(id)

  if (!removeduser.success) return { success: false, error: removeduser.error }

  return { success: true, data: removeduser.data }
}

/*
export const putByTitle = async (title, data) => {
 

  const updateduser = await slotRepo.updateByTitle(title, data)

  if (!updateduser.success) {
    return { success: false, error: updateduser.error }
  }

  return { success: true, data: updateduser.data }
}

export const exist = async ({  }) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Failed finding user' }
  }
}
*/