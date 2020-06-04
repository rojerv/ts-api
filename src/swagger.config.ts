const PORT: number = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 3000

const swaggerDocument: {} = {
  openapi: '3.0.0',
  servers: [{
    url: `http://localhost:${PORT}`
  }],
  schemes: ['http'],
  components: {
    schemas: {
      Student: {
        type: 'object',
        required: [],
        properties: {
          id: {
            type: 'integer'
          },
          name: {
            type: 'string',
            default: 'Иван Иванов Иванович'
          },
          birthday: {
           type: 'string',
           format: 'date-time'
          },
          rate: {
            type: 'integer',
            enum: ['неуд', 'уд', 'хор', 'отл'],
            default: 2
          }
        }
      }
    }
  },
  info: {
    title: 'API студентов',
    version: '1.0.0'
  },
  basePath: '/api',
  paths: {
    '/api/v1/students': {
      get: {
        summary: 'Возвращает список студентов',
        responses: {
          200: {
            description: 'Список студентов',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Student'
                  }
                }
              }
            }
          }
        }
      },
      post: {
        summary: 'Создать новую запись студента',
        requestBody: {
          description: 'Данные студента',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Student'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Данные созданного студента',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Student'
                }
              }
            }
          }
        }
      }
    },
    '/api/v1/students/{studentId}': {
      get: {
        summary: 'Возвращает студента по id',
        parameters: [
          {
            name: 'studentId',
            in: 'path',
            description: 'ID студента',
            required: true,
            schema: {
              type: 'number'
            }
          }
        ],
        responses: {
          200: {
            description: 'Данные студента',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Student'
                }
              }
            }
          }
        }
      },
      put: {
        summary: 'Изменить данные студента',
        parameters: [
          {
            name: 'studentId',
            in: 'path',
            description: 'ID студента',
            required: true,
            schema: {
              type: 'number'
            }
          }
        ],
        requestBody: {
          description: 'Данные студента',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Student'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Новые данные студента',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Student'
                }
              }
            }
          }
        }
      },
      delete: {
        summary: 'Удалить студента',
        parameters: [
          {
            name: 'studentId',
            in: 'path',
            description: 'ID студента',
            required: true,
            schema: {
              type: 'number'
            }
          }
        ],
        responses: {
          200: {
            description: 'Удаленные данные',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Student'
                }
              }
            }
          }
        }
      }
    }
  }
}

export default swaggerDocument
