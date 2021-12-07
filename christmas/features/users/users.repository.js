import prisma from '@/lib/clients/db'


export const findMany = async () => {
  try {
    const users = await prisma.user.findMany(  {
      include: {
        userSlots: true,
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


export const create = async ({username}) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const user = await prisma.user.create({
      data:{
          username
           } 
       })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Failed creating user' }
  }
}



export const findUnique = async (username) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
       ...username,
      },
      include: {
        userSlots: true,
      },
    })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Ffssssssss' }
  }
}

export const removeById = async (id) => {
  try {
    const user = await prisma.user.delete({ where: { id } })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Failed deleting user' }
  }
}
