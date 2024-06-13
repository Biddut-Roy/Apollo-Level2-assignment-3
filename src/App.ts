import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('server Is a Starting');
});

// application routes
app.use();

//route not found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
