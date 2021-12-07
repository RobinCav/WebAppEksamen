import * as CalendersService from './calenders.service'

export const listCalenders = async (req, res) => {
  const Calenders = await CalendersService.getToList()

  if (Calenders.error) return res.status(500).json(Calenders.error)

  return res.status(200).json(Calenders)
}

/*
export const updateCalenderbyTitle = async (req, res) => {
  const { title } = req.query
  const data = req.body

  if (!title)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title',
    })

    const Calender = await CalendersService.putByTitle(title, data)

    if (!Calender?.success) {
      switch (Calender?.type) {
        case 'Calender.NotExist':
          return res.status(404).json({
            success: false,
            error: Calender.error,
          })
        case 'Calender.Duplicate':
          return res.status(409).json({
            success: false,
            error: Calender.error,
          })
        default:
          return res.status(500).json({
            success: false,
            error: Calender.error,
          })
      }
  }
}
*/
export const createCalender = async (req, res) => {
  const { name} = req.body

  if (  !name  )
    return res
      .status(400)
      .json({ success: false, error: 'Du må fille alle påkrevde felter....(navn)' })
  

  const createdCalender = await CalendersService.create({ 
    name
    })

  // 500 Internal Server Error hvis noe går galt
  if (!createdCalender?.success) {
    return res.status(500).json({
      success: false,
      error: createdCalender.error,
    })
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdCalender.data,
  })
}


export const getCalenderByName = async (req, res) => {
  const { name } = req.query

  if (!name)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: Calendername',
    })

  const Calender = await CalendersService.getCalenderByName({
    name,
  })

  if (!Calender?.success) {
    switch (Calender?.type) {
      case 'Calender.NotExist':
        return res.status(404).json({
          success: false,
          error: Calender.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: Calender.error,
        })
    }
  }

  return res.status(200).json(Calender)
}


export const removeCalenderById = async (req, res) => {
  const { id } = req.query

  if (!id)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: ',
    })

  const removedCalender = await CalendersService.deleteById({
    id,
  })

  if (!removedCalender?.success) {
    switch (removedCalender?.type) {
      case 'Calender.NotExist':
        return res.status(404).json({
          success: false,
          error: removedIssue.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: removedCalender.error,
        })
    }
  }

  return res.status(204).end()
}