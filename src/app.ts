import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as swaggerUi from 'swagger-ui-express'
import swaggerConfig from './swagger.config'
import { studentsRouter } from './controllers/StudentsController'
import { errorHandler, notFoundHandler } from './middleware/error'

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use('/api/v1/students', studentsRouter)
app.use(errorHandler)
app.use(notFoundHandler)

export default app
