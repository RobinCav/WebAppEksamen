import * as issuesRepo from './issues.repository'

export const getToList = async () => {
  const issues = await issuesRepo.findMany()

  if (!issues.success) return { success: false, error: issues.error }

  return { success: true, data: issues.data }
}

export const create = async ({ title,description, creator, severity,created_at }) => {
  const issue = await issuesRepo.exist({ title,description, creator, severity,created_at })

  // feil med hentingen av data fra databasen via ORM
  if (issue?.error) return { success: false, error: issue.error }

  // bruker finnes hvis data har verdi
  if (issue.data) return { success: false, error: 'issue already exist' }

  const createdIssue = await issuesRepo.create({ title,description, creator, severity,created_at })

  // feil ved lagring av bruker via ORM
  if (!createdIssue.success) return { success: false, error: createdIssue.error }

  return { success: true, data: createdIssue.data }
}