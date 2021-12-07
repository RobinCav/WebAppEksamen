import * as UsersService from './users.service'



export const listUsers = async (req, res) => {
  const Users = await UsersService.getToList()

  if (Users.error) return res.status(500).json(Users.error)

  return res.status(200).json(Users)
}

/*
export const updateUserbyTitle = async (req, res) => {
  const { title } = req.query
  const data = req.body

  if (!title)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title',
    })

    const User = await UsersService.putByTitle(title, data)

    if (!User?.success) {
      switch (User?.type) {
        case 'User.NotExist':
          return res.status(404).json({
            success: false,
            error: User.error,
          })
        case 'User.Duplicate':
          return res.status(409).json({
            success: false,
            error: User.error,
          })
        default:
          return res.status(500).json({
            success: false,
            error: User.error,
          })
      }
  }
}
*/
export const createUser = async (req, res) => {
  const { title,description, creator, severity, departmentId} = req.body

  if (  !title || !description || !creator || !severity || !departmentId  )
    return res
      .status(400)
      .json({ success: false, error: 'Du må fille alle påkrevde felter....(title,description and creator osv..)' })
  
  
  if(title.length <25 || title.length >150){
    return res
    .status(400)
    .json({ success: false, error: 'Tittelen må inneholde 25-150 bokstaver' })
  }
  if(description.length < 25 || description.length > 250 ){
    return res
    .status(400)
    .json({ success: false, error: 'Beskrivelsen må inneholde 25-250 bokstaver' })
  }

  let name = creator.split(' ')
  if(!validateCreatorName(name)){
    return res
      .status(400)
      .json({ success: false, error: 'Navnet må inneholde både fornavn og etternavn(Begge må starte med stor bokstav' })
  
  }


  const createdUser = await UsersService.create({ 
    title,description, creator, severity, departmentId
    })

  // 500 Internal Server Error hvis noe går galt
  if (!createdUser?.success) {
    return res.status(500).json({
      success: false,
      error: createdUser.error,
    })
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdUser.data,
  })
}


export const getUserByTitle = async (req, res) => {
  const { username } = req.query

  if (!username)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: username',
    })

  const User = await UsersService.getUserByUsername({
    username,
  })

  if (!User?.success) {
    switch (User?.type) {
      case 'User.NotExist':
        return res.status(404).json({
          success: false,
          error: User.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: User.error,
        })
    }
  }

  return res.status(200).json(User)
}


export const removeUserByTitle = async (req, res) => {
  const { id } = req.query

  if (!id)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title, desc or sev',
    })

  const removedUser = await UsersService.deleteById({
    id,
  })

  if (!removedUser?.success) {
    switch (removedUser?.type) {
      case 'User.NotExist':
        return res.status(404).json({
          success: false,
          error: removedIssue.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: removedUser.error,
        })
    }
  }

  return res.status(204).end()
}