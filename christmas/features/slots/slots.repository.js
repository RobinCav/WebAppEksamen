import prisma from '@/lib/clients/db'


export const findMany = async () => {

  
  try {
    let date = new Date()
    let today = date.getDate();
    const slots = await prisma.slot.findMany(  {
      where: {
          /*
          order:{
            lte:today,
          }
          */
          
      },
      include: {
        userSlots: true,
    },
  })

    return { success: true, data: slots }
  } catch (error) {
    console.log(error)
    return { success: false, error: 'Failed finding slots' }
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


export const create = async ({slug, order,openAt, calenderId}) => {
  // bruker try/catch for å håndtere feil gitt av Prisma
  try {
    // bruker prisma clienten til å lage bruker
    // .create er metoden vi bruker for å lage noe
    const slot = await prisma.slot.create({
      data:{
         slug,
         order,
         openAt,
         calender:{
            connect:{
              id: calenderId
              }
            } 
           } 
       })

    return { success: true, data: slot }
  } catch (error) {
    return { success: false, error: 'Failed creating slot' }
  }
}



export const findUnique = async (slug) => {
  try {
    let date = new Date()
    let today = date.getDate();
    
    const slot = await prisma.slot.findUnique({
      where: {
         ...slug
      },
      include: {
        userSlots: true,
      },
    })

    return { success: true, data: slot }
  } catch (error) {
    return { success: false, error: 'cant find unique slot'}
  }
}

export const removeById = async (id) => {
  try {
    const slot = await prisma.slot.delete({ where: { id } })

    return { success: true, data: slot }
  } catch (error) {
    return { success: false, error: 'Failed deleting slot' }
  }
}
