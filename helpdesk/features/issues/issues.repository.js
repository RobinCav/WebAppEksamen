import prisma from '@/lib/clients/db'

export const findMany = async () => {
  try {
    const issues = await prisma.issue.findMany(  {
      include: {
        department: true,
    },
  })

    return { success: true, data: issues }
  } catch (error) {
    console.log(error)
    return { success: false, error: 'Failed finding issues' }
  }
}




export const create = async ({title,description, creator, severity, departmentId}) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const issue = await prisma.issue.create({
      data:{
        title,
        description,
         creator,
          severity,
           department: {
             connect:{
               id: departmentId
             }
           }
    }
       })

    return { success: true, data: issue }
  } catch (error) {
    return { success: false, error: 'Failed creating issue' }
  }
}



export const findUnique = async (identifier) => {
  try {
    const issue = await prisma.issue.findUnique({
      where: {
       ...identifier,
      },
      include: {
        comments: true,
        department: true,
      },
    })

    return { success: true, data: issue }
  } catch (error) {
    return { success: false, error: 'Ffssssssss' }
  }
}

export const removeById = async (id) => {
  try {
    const issue = await prisma.issue.delete({ where: { id } })

    return { success: true, data: issue }
  } catch (error) {
    return { success: false, error: 'Failed deleting issue' }
  }
}

