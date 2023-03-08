// // 

// import express from 'express'
// import createHttpError from 'http-errors'
// import { parentRouter } from '../src/routes'
// import { HandleError } from '../src/middleware/errorHandler'
// import type { NextFunction, Request, Response } from 'express'

// const app = express()
// const path = require('path');
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../src/views'));

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(parentRouter)
// app.use((_req: Request, _res: Response, next: NextFunction) => {
//   return next(new createHttpError.NotFound('not found'))
// })
// app.use((err: express.ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
//   return HandleError(err, req, res, next)
// })

// export default app
