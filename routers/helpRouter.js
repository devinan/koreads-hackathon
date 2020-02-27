import express from "express";
import routes from "../routes";
import requestRouter from "./request/requestRouter";
import { help } from "../controllers/settingController";

const helpRouter = express.Router();

helpRouter.get(routes.help, help);
helpRouter.use(routes.requests, requestRouter);

export default helpRouter;
