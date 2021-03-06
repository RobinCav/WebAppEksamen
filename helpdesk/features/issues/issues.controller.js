import validateCreatorName from '@/components/validateCreatorName'
import * as issuesService from './issues.service'



export const listIssues = async (req, res) => {
  const issues = await issuesService.getToList()

  if (issues.error) return res.status(500).json(issues.error)

  return res.status(200).json(issues)
}

export const updateIssuebyTitle = async (req, res) => {
  const { title } = req.query
  const data = req.body

  if (!title)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title',
    })

    const issue = await issuesService.putByTitle(title, data)

    if (!issue?.success) {
      switch (issue?.type) {
        case 'issue.NotExist':
          return res.status(404).json({
            success: false,
            error: issue.error,
          })
        case 'issue.Duplicate':
          return res.status(409).json({
            success: false,
            error: issue.error,
          })
        default:
          return res.status(500).json({
            success: false,
            error: issue.error,
          })
      }
  }
}

export const createIssue = async (req, res) => {
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


  const createdIssue = await issuesService.create({ 
    title,description, creator, severity, departmentId
    })

  // 500 Internal Server Error hvis noe går galt
  if (!createdIssue?.success) {
    return res.status(500).json({
      success: false,
      error: createdIssue.error,
    })
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdIssue.data,
  })
}


export const getIssueByTitle = async (req, res) => {
  const { title } = req.query

  if (!title)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title, desc or sev',
    })

  const issue = await issuesService.getIssueById({
    title,
  })

  if (!issue?.success) {
    switch (issue?.type) {
      case 'issue.NotExist':
        return res.status(404).json({
          success: false,
          error: issue.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: issue.error,
        })
    }
  }

  return res.status(200).json(issue)
}


export const removeIssueByTitle = async (req, res) => {
  const { id } = req.query

  if (!id)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title, desc or sev',
    })

  const removedIssue = await issuesService.deleteById({
    id,
  })

  if (!removedIssue?.success) {
    switch (removedIssue?.type) {
      case 'issue.NotExist':
        return res.status(404).json({
          success: false,
          error: removedIssue.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: removedIssue.error,
        })
    }
  }

  return res.status(204).end()
}