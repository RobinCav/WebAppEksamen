import * as usersRepo from './users.repository'


export const getUserByUsername = async ({ username }) => {
  const user = await usersRepo.findUnique({ username })

  if (!user.success) return { success: false, error: user.error }
  if (!user.data)
    return {
      success: false,
      type: 'user.NotExist',
      error: `user with ${username} does not exist`,
    }

  return { success: true, data: user.data }
}
export const getToList = async () => {
  const users = await usersRepo.findMany(
    {
    include: {
      userSlots: true
    },
  }
    
  )

  if (!users.success) return { success: false, error: users.error }

  return { success: true, data: users.data }
}

export const create = async ({ username  }) => {

  const createduser = await usersRepo.create({ username })

  // feil ved lagring av bruker via ORM
  if (!createduser.success) return { success: false, error: createduser.error }

  return { success: true, data: createduser.data }
}

export const deleteById = async ({ id }) => {
 

  const removeduser = await usersRepo.removeById(id)

  if (!removeduser.success) return { success: false, error: removeduser.error }

  return { success: true, data: removeduser.data }
}

/*
export const putByTitle = async (title, data) => {
 

  const updateduser = await usersRepo.updateByTitle(title, data)

  if (!updateduser.success) {
    return { success: false, error: updateduser.error }
  }

  return { success: true, data: updateduser.data }
}
*/


export const exist = async ({ username }) => {
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