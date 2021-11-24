import * as issuesRepo from './issues.repository'

export const getToList = async () => {
  const issues = await issuesRepo.findMany()

  if (!issues.success) return { success: false, error: issues.error }

  return { success: true, data: issues.data }
}

export const create = async ({ id,title,description, creator, severity,created_at  }) => {

  const createdIssue = await issuesRepo.create({ id,title,description, creator, severity,created_at })

  // feil ved lagring av bruker via ORM
  if (!createdIssue.success) return { success: false, error: createdIssue.error }

  return { success: true, data: createdIssue.data }
}