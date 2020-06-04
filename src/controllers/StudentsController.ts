import express, { Request, Response } from 'express'
import * as StudentService from '../services/StudentsService'
import { Student } from '../entities/student'
import { Students } from '../entities/students'

export const studentsRouter = express.Router()

studentsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const students: Students = await StudentService.findAll()

    res.status(200).send(students)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

studentsRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10)

  try {
    const student: Student = await StudentService.find(id)

    res.status(200).send(student)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

studentsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const student: Student = req.body

    const createdStudent: Student = await StudentService.create(student)
    res.status(201).send(createdStudent)
  } catch (e) {
    res.status(404).send(e.message)
  }
})

studentsRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10)
    const studentData: Student = req.body

    const student: Student = await StudentService.update(studentData, id)

    res.status(200).send(student)
  } catch (e) {
    res.status(500).send(e.message)
  }
})

studentsRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10)
    const deletedStudent: Student = await StudentService.remove(id)

    res.status(200).send(deletedStudent)
  } catch (e) {
    res.status(500).send(e.message)
  }
})
