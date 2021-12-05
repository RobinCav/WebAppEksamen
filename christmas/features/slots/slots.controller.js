import * as SlotsService from './slots.service'



export const listSlots = async (req, res) => {
  const Slots = await SlotsService.getToList()

  if (Slots.error) return res.status(500).json(Slots.error)

  return res.status(200).json(Slots)
}

/*
export const updateSlotbyTitle = async (req, res) => {
  const { title } = req.query
  const data = req.body

  if (!title)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title',
    })

    const Slot = await SlotsService.putByTitle(title, data)

    if (!Slot?.success) {
      switch (Slot?.type) {
        case 'Slot.NotExist':
          return res.status(404).json({
            success: false,
            error: Slot.error,
          })
        case 'Slot.Duplicate':
          return res.status(409).json({
            success: false,
            error: Slot.error,
          })
        default:
          return res.status(500).json({
            success: false,
            error: Slot.error,
          })
      }
  }
}
*/
export const createSlot = async (req, res) => {
  const { slug, order,openAt, calenderId} = req.body

  if (  !slug || !order || !openAt || !calenderId)
    return res
      .status(400)
      .json({ success: false, error: 'Du må fille alle påkrevde felter....(slug, order, openAt, calenderId..)' })
  


  const createdSlot = await SlotsService.create({ 
    slug, order,openAt, calenderId
    })

  // 500 Internal Server Error hvis noe går galt
  if (!createdSlot?.success) {
    return res.status(500).json({
      success: false,
      error: createdSlot.error,
    })
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdSlot.data,
  })
}


export const getSlotBySlug = async (req, res) => {
  const { slug } = req.query

  if (!slug)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: slug',
    })
  


  const Slot = await SlotsService.getSlotBySlug({
    slug,
  })

  if (!Slot?.success) {
    switch (Slot?.type) {
      case 'Slot.NotExist':
        return res.status(404).json({
          success: false,
          error: Slot.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: Slot.error,
        })
    }
  }

  return res.status(200).json(Slot)
}


export const removeSlotById = async (req, res) => {
  const { id } = req.query

  if (!id)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title, desc or sev',
    })

  const removedSlot = await SlotsService.deleteById({
    id,
  })

  if (!removedSlot?.success) {
    switch (removedSlot?.type) {
      case 'Slot.NotExist':
        return res.status(404).json({
          success: false,
          error: removedIssue.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: removedSlot.error,
        })
    }
  }

  return res.status(204).end()
}