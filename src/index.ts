import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';
import statusRouter from './routes/status.route';

const app = express();

app.use(express.json());
app.use(usersRoute);
app.use(statusRouter);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'bar' });
});

app.listen(3000, () => {
  console.log('Estou funcionando');
});
