import * as CommentsService from './comments.service'



export const listComments = async (req, res) => {
  const Comments = await CommentsService.getToList()

  if (Comments.error) return res.status(500).json(Comments.error)

  return res.status(200).json(Comments)
}

export const createComment = async (req, res) => {
  const { title,description, creator, severity, departmentId} = req.body

  // 400 Bad Request hvis email mangler
  if (  !title  )
    return res
      .status(400)
      .json({ success: false, error: 'Missing required fields' })

  const createdComment = await CommentsService.create({ 
    title,description, creator, severity, departmentId
    })

  // 500 Internal Server Error hvis noe går galt
  if (!createdComment?.success) {
    return res.status(500).json({
      success: false,
      error: createdComment.error,
    })
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdComment.data,
  })
}


export const getCommentsByIssueId = async (req, res) => {
  const { issueId } = req.query

  if (!issueId)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title, desc or sev',
    })

  const Comments = await CommentsService.getCommentsByIssueId({
    issueId,
  })

  if (!Comments?.success) {
    switch (Comments?.type) {
      case 'Comment.NotExist':
        return res.status(404).json({
          success: false,
          error: Comments.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: Comments.error,
        })
    }
  }

  return res.status(200).json(Comments)
}


export const removeCommentById = async (req, res) => {
  const { id } = req.query

  if (!id)
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: title, desc or sev',
    })

  const removedComment = await CommentsService.deleteById({
    id,
  })

  if (!removedComment?.success) {
    switch (removedComment?.type) {
      case 'Comment.NotExist':
        return res.status(404).json({
          success: false,
          error: removedComment.error,
        })
      default:
        return res.status(500).json({
          success: false,
          error: removedComment.error,
        })
    }
  }

  return res.status(204).end()
}