import * as issuesRepo from './issues.repository'


export const getIssueById = async ({ title }) => {
  const issue = await issuesRepo.findUnique({ title })

  if (!issue.success) return { success: false, error: issue.error }
  if (!issue.data)
    return {
      success: false,
      type: 'issue.NotExist',
      error: `issue with ${title} does not exist`,
    }

  return { success: true, data: issue.data }
}
export const getToList = async () => {
  const issues = await issuesRepo.findMany(
    {
    include: {
      comments: true,
      department: true,
    },
  }
    
  )

  if (!issues.success) return { success: false, error: issues.error }

  return { success: true, data: issues.data }
}

export const create = async ({ title,description, creator, severity, departmentId  }) => {

  const createdIssue = await issuesRepo.create({ title,description, creator, severity, departmentId })

  // feil ved lagring av bruker via ORM
  if (!createdIssue.success) return { success: false, error: createdIssue.error }

  return { success: true, data: createdIssue.data }
}

export const deleteById = async ({ id }) => {
 

  const removedIssue = await issuesRepo.removeById(issue.data.id)

  if (!removedIssue.success) return { success: false, error: removedIssue.error }

  return { success: true, data: removedIssue.data }
}

export const putByTitle = async (title, data) => {
 

  const updatedIssue = await issuesRepo.updateByTitle(title, data)

  if (!updatedIssue.success) {
    return { success: false, error: updatedIssue.error }
  }

  return { success: true, data: updatedIssue.data }
}


export const exist = async ({ title }) => {
  try {
    const user = await prisma.issue.findUnique({
      where: {
        title,
      },
    })

    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: 'Failed finding issue' }
  }
}
