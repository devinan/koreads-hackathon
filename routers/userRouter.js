import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.editProfile);
userRouter.get(routes.changePassword);
userRouter.get(routes.userDetail);

export default userRouter;
