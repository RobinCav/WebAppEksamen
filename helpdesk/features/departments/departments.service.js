import * as departmentRepo from './departments.repository'

export const getToList = async () => {
  const department = await departmentRepo.findMany()

  if (!department.success) return { success: false, error: department.error }

  return { success: true, data: department.data }
}

export const create = async ({ name }) => {
  const department = await departmentRepo.exist({ name })

  // feil med hentingen av data fra databasen via ORM
  if (department?.error) return { success: false, error: department.error }

  // bruker finnes hvis data har verdi
  if (department.data) return { success: false, error: 'department already exist' }

  const createdDepartment = await departmentRepo.create({ name })

  // feil ved lagring av bruker via ORM
  if (!createdDepartment.success) return { success: false, error: createdDepartment.error }

  return { success: true, data: createdDepartment.data }
}