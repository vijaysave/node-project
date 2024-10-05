import { Router } from 'express';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ForceRoutes from './ForceRoutes';

// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

// Init router
const userRouter = Router();
const forceRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

forceRouter.get(Paths.Forces.Get, ForceRoutes.getAll);
forceRouter.post(Paths.Forces.Add, ForceRoutes.add);
forceRouter.put(Paths.Forces.Update, ForceRoutes.update);
forceRouter.delete(Paths.Forces.Delete, ForceRoutes.delete);
// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Forces.Base, forceRouter);


// **** Export default **** //

export default apiRouter;
