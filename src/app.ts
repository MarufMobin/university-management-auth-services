import cors from 'cors';
import express, { Application } from 'express';
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

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject( new Error('Unhandel Promise Rejection'))
// })

export default app;
