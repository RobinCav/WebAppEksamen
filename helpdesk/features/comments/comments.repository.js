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




export const create = async ({comment, issueId}) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const Comment = await prisma.comment.create({
      data:{
        comment,
           issue: {
             connect:{
               id: issueId
             }
           }
    }
       })

    return { success: true, data: Comment }
  } catch (error) {
    return { success: false, error: 'Failed creating Comment' }
  }
}



export const findUnique = async (issueId) => {
  try {
    const Comment = await prisma.comment.findMany({
      where: {
       ...issueId
      },
      include: {
        issue: true, // Return all fields
      },
    })

    return { success: true, data: Comment }
  } catch (error) {
    return { success: false, error: 'cant find comments' }
  }
}

export const removeById = async (id) => {
  try {
    const Comment = await prisma.comment.delete({ where: { id } })

    return { success: true, data: Comment }
  } catch (error) {
    return { success: false, error: 'Failed deleting Comment' }
  }
}


