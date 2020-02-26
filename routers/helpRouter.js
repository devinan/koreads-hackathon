import express from "express";
import routes from "../routes";
import requestRouter from "./request/requestRouter";

const helpRouter = express.Router();

helpRouter.get(routes.help);
helpRouter.use(routes.requests, requestRouter);

export default helpRouter;
