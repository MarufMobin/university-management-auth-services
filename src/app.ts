import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import routers from './app/routes';

// use Express
const app: Application = express();

// use Cors
app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
// app.use('/api/v1/users/', UserRoutes)
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes)
app.use('/api/v1/', routers);

// handle not found any url
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Founded',
      },
    ],
  });
  next();
});

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject( new Error('Unhandel Promise Rejection'))
// })

export default app;
