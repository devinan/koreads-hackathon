import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users);
userRouter.get(routes.userDetail);
userRouter.get(routes.editProfile);
userRouter.get(routes.changePassword);

export default userRouter;
