import * as departmentRepo from './departments.repository'

export const getToList = async () => {
  const department = await departmentRepo.findMany()

  if (!department.success) return { success: false, error: department.error }

  return { success: true, data: department.data }
}

export const create = async ({ name }) => {

  const createdDepartment = await departmentRepo.create({ name })

  // feil ved lagring av bruker via ORM
  if (!createdDepartment.success) return { success: false, error: createdDepartment.error }

  return { success: true, data: createdDepartment.data }
}