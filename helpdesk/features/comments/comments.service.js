import * as CommentsRepo from './comments.repository'

export const getCommentsByIssueId = async ({ issueId }) => {
  const Comments = await CommentsRepo.findUnique({ issueId })

  if (!Comments.success) return { success: false, error: Comments.error }
  if (!Comments.data)
    return {
      success: false,
      type: 'Comment.NotExist',
      error: `Comment with ${title} does not exist`,
    }

  return { success: true, data: Comments.data }
}
export const getToList = async () => {
  const Comments = await CommentsRepo.findMany()

  if (!Comments.success) return { success: false, error: Comments.error }

  return { success: true, data: Comments.data }
}

export const create = async ({ comment, issueId  }) => {

  const createdComment = await CommentsRepo.create({ comment, issueId })

  // feil ved lagring av bruker via ORM
  if (!createdComment.success) return { success: false, error: createdComment.error }

  return { success: true, data: createdComment.data }
}

export const deleteById = async ({ id }) => {
 

  const removedComment = await CommentsRepo.removeById(Comment.data.id)

  if (!removedComment.success) return { success: false, error: removedComment.error }

  return { success: true, data: removedComment.data }
}