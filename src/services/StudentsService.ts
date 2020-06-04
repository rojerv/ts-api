import { Student } from '../entities/student'
import { Students } from '../entities/students'

/**
 * In Memory Store
 */

const students: Students = []

export const findAll = async (): Promise<Students> => {
  return students
}

export const find = async (id: number): Promise<Student> => {
  const student: Student | undefined = students.find(s => s.id === id)

  if (student) return student

  throw new Error('No record found')
}

export const create = async (studentData: Student): Promise<Student> => {
  const id = new Date().valueOf()
  const newStudent: Student = { ...studentData, id }
  students.push(newStudent)
  return newStudent
}

export const update = async (updatedStudent: Student, id: number): Promise<Student> => {
  const studentIndex: number = students.findIndex(s => s.id === id)

  if (studentIndex > -1) {
    console.log(students[studentIndex])
    console.log(updatedStudent)
    console.log({ ...students[studentIndex], ...updatedStudent })
    students[studentIndex] = { ...students[studentIndex], ...updatedStudent }
    return students[studentIndex]
  }

  throw new Error('No record found to update')
}

export const remove = async (id: number): Promise<Student> => {
  const studentIndex: number = students.findIndex(s => s.id === id)

  if (studentIndex > -1) {
    return students.splice(studentIndex, 1)[0]
  }

  throw new Error('No record found to delete')
}
