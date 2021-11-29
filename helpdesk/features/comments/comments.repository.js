import prisma from '@/lib/clients/db'

export const findMany = async () => {
  try {
    const Comments = await prisma.comment.findMany()

    return { success: true, data: Comments }
  } catch (error) {
    console.log(error)
    return { success: false, error: 'Failed finding Comments' }
  }
}




export const create = async ({title,description, creator, severity, departmentId}) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const Comment = await prisma.Comment.create({
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

    return { success: true, data: Comment }
  } catch (error) {
    return { success: false, error: 'Failed creating Comment' }
  }
}



export const findUnique = async (identifier) => {
  try {
    const Comment = await prisma.comment.findMany({
      where: {
       ...identifier,
      },
    })

    return { success: true, data: Comment }
  } catch (error) {
    return { success: false, error: 'cant find comments' }
  }
}

export const removeById = async (id) => {
  try {
    const Comment = await prisma.Comment.delete({ where: { id } })

    return { success: true, data: Comment }
  } catch (error) {
    return { success: false, error: 'Failed deleting Comment' }
  }
}


