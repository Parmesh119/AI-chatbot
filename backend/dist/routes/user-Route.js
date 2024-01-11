import { Router } from 'express';
import { getAllUser } from '../controllers/user-controllers.js';
const userRoute = Router();
userRoute.get('/', getAllUser);
export default userRoute;
//# sourceMappingURL=user-Route.js.map