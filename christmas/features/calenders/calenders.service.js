import * as CalendersRepo from './calenders.repository'


export const getCalenderByName = async ({ name }) => {
  const Calender = await CalendersRepo.findUnique({ name })

  if (!Calender.success) return { success: false, error: Calender.error }
  if (!Calender.data)
    return {
      success: false,
      type: 'Calender.NotExist',
      error: `Calender with ${name} does not exist`,
    }

  return { success: true, data: Calender.data }
}

export const getToList = async () => {
  const Calenders = await CalendersRepo.findMany(
    {
    include: {
      slot: true
    },
  }
    
  )

  if (!Calenders.success) return { success: false, error: Calenders.error }

  return { success: true, data: Calenders.data }
}

export const create = async ({ name  }) => {

  const createdCalender = await CalendersRepo.create({ name })

  // feil ved lagring av bruker via ORM
  if (!createdCalender.success) return { success: false, error: createdCalender.error }

  return { success: true, data: createdCalender.data }
}

export const deleteById = async ({ id }) => {
 

  const removedCalender = await CalendersRepo.removeById(id)

  if (!removedCalender.success) return { success: false, error: removedCalender.error }

  return { success: true, data: removedCalender.data }
}

/*
export const putByTitle = async (title, data) => {
 

  const updatedCalender = await CalendersRepo.updateByTitle(title, data)

  if (!updatedCalender.success) {
    return { success: false, error: updatedCalender.error }
  }

  return { success: true, data: updatedCalender.data }
}
*/


export const exist = async ({ name }) => {
  try {
    const Calender = await prisma.Calender.findUnique({
      where: {
        name,
      },
    })

    return { success: true, data: Calender }
  } catch (error) {
    return { success: false, error: 'Failed finding Calender' }
  }
}