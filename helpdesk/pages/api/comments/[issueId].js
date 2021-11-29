
import * as commentsController from '@/features/comments/comments.controller'

export default async function handler(req, res) {
  const { method } = req

  switch (method?.toLowerCase()) {
    case 'get':
      await commentsController.getCommentsByIssueId(req, res)
      break
    case 'delete':
      await commentsController.removeCommentByIssueId(req, res)
      break
      /*
    case 'put':
      await issuesController.updateIssuebyId(req, res)
      break
      */
    default:
      res.status(405).end()
  }
}

