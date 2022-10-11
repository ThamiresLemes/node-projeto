import { Router, Request, Response, NextFunction } from 'express';
//forma de configurar rotas no express

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Fabricio' }];
  res.status(200).send({ users });
});

usersRoute.get(
  '/users/:uuid',
  (req: Request<{ uuid: String }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
  }
);

usersRoute.post('/users',(req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  console.log(newUser);
  res.status(201).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{uuid: String}>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifieduser = req.body;
  modifieduser.uuid = uuid;
  res.status(200).send(modifieduser);
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: String }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
});


export default usersRoute;
