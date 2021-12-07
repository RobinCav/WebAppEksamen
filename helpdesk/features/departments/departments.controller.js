import * as departmentService from './departments.service'



export const listDepartments = async (req, res) => {
  const departments = await departmentService.getToList()

  if (departments.error) return res.status(500).json(departments.error)

  return res.status(200).json(departments)
}

export const createDepartment = async (req, res) => {
  const { name } = req.body

  if (!name )
    return res
      .status(400)
      .json({ success: false, error: 'Missing required fields' })

  const createdDepartment = await departmentService.create({
    name
    })

  // 500 Internal Server Error hvis noe går galt
  if (!createdDepartment?.success) {
    return res.status(500).json({
      success: false,
      error: createdDepartment.error,
    })
  }

  // 201 Created om alt går bra
  return res.status(201).json({
    success: true,
    data: createdDepartment.data,
  })
}