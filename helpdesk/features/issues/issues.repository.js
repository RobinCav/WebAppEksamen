import prisma from '@/lib/clients/db'

export const findMany = async () => {
  try {
    const issues = await prisma.issue.findMany()

    return { success: true, data: issues }
  } catch (error) {
    console.log(error)
    return { success: false, error: 'Failed finding issues' }
  }
}



export const create = async (data) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const issue = await prisma.issue.create({ data })

    return { success: true, data: issue }
  } catch (error) {
    return { success: false, error: 'Failed creating issue' }
  }
}

export const exist = async ({ title }) => {
  try {
    const issue = await prisma.issue.findUnique({
      where: {
        title,
      },
    })

    return { success: true, data: issue }
  } catch (error) {
    return { success: false, error: 'Failed finding issue' }
  }
}