import * as issuesService from './issues.service'



export const listIssues = async (req, res) => {
  const feeds = await issuesService.getToList()

  if (feeds.error) return res.status(500).json(feeds.error)

  return res.status(200).json(feeds)
}

export const createIssue = async (req, res) => {
  const { title,description, creator, severity,created_at } = req.body

  // 400 Bad Request hvis email mangler
  if (!title || !description || !creator || !severity || !created_at || !department)
    return res
      .status(400)
      .json({ success: false, error: 'Missing required fields' })

  const createdIssue = await issuesService.create({
    title,description, creator, severity,created_at, department
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