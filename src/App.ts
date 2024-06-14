import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/router';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middleware/globalErrorHandler';

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('server Is a Starting');
});

app.use(globalErrorHandler);
// not route found
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    error: '',
  });
});

export default app;
