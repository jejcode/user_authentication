import { Login, Signup } from "../Controllers/AuthController.js";
import {Router} from 'express'
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const authRouter = Router()

authRouter.post('/signup', Signup)
authRouter.post('/login', Login)
authRouter.post('/',userVerification)

export default authRouter