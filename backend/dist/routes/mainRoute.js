import { Router } from "express";
import userRoute from "./user-Route.js";
import chatRoute from "./chat-Routes.js";
const mainRoute = Router();
mainRoute.use('/user', userRoute); //api/chatbot/user
mainRoute.use('/chat', chatRoute); //api/chatbot/chat
export default mainRoute;
//# sourceMappingURL=mainRoute.js.map