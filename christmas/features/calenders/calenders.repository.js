import prisma from '@/lib/clients/db'


export const findMany = async () => {
  try {
    const users = await prisma.calender.findMany(  {
      include: {
        slot: true,
    },
  })

    return { success: true, data: users }
  } catch (error) {
    console.log(error)
    return { success: false, error: 'Failed finding users' }
  }
}


/*
export const updateByUsername = async (username, { isResolved }) => {
  try {
    const user = await prisma.user.update({
      where: { title },
      data: { isResolved },
    })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Failed updating user' }
  }
}
*/


export const create = async ({name}) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const calender = await prisma.calender.create({
      data:{
          name
           } 
       })

    return { success: true, data: calender }
  } catch (error) {
    return { success: false, error: 'Failed creating calender' }
  }
}



export const findUnique = async (name) => {
  try {
    const calender = await prisma.calender.findUnique({
      where: {
       ...name,
      },
      include: {
        slot: true,
      },
    })

    return { success: true, data: calender }
  } catch (error) {
    return { success: false, error: 'FindUnique failed : cant find calender' }
  }
}

export const removeById = async (id) => {
  try {
    const calender = await prisma.calender.delete({ where: { id } })

    return { success: true, data: calender }
  } catch (error) {
    return { success: false, error: 'Failed deleting calender' }
  }
}
