import prisma from '@/lib/clients/db'


export const findMany = async () => {
  try {
    const userslots = await prisma.UserSlot.findMany()

    return { success: true, data: userslots }
  } catch (error) {
    console.log(error)
    return { success: false, error: 'Failed finding userslots' }
  }
}


/*
export const updateByslotname = async (slotname, { isResolved }) => {
  try {
    const slot = await prisma.slot.update({
      where: { title },
      data: { isResolved },
    })

    return { success: true, data: slot }
  } catch (error) {
    return { success: false, error: 'Failed updating slot' }
  }
}
*/


export const create = async ({coupon, slotId, userId}) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const slot = await prisma.slot.create({
      data:{
         coupon,
         slot:{
            connect:{
              id: slotId
              }
            },
          user:{
            connect:{
              id: userId
            }
          }
           } 
       })

    return { success: true, data: slot }
  } catch (error) {
    return { success: false, error: 'Failed creating userslot' }
  }
}



export const findUnique = async (coupon) => {
  try {
    const slot = await prisma.userslot.findUnique({
      where: {
       ...coupon,
      },
    })

    return { success: true, data: slot }
  } catch (error) {
    return { success: false, error: 'cant find unique slot'}
  }
}

export const removeById = async (id) => {
  try {
    const slot = await prisma.userslot.delete({ where: { id } })

    return { success: true, data: slot }
  } catch (error) {
    return { success: false, error: 'Failed deleting slot' }
  }
}
