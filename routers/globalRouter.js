import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home);
globalRouter.get(routes.start);
globalRouter.get(routes.join);
globalRouter.get(routes.login);
globalRouter.get(routes.logout);
globalRouter.get(routes.search);
globalRouter.get(routes.settings);
globalRouter.get(routes.interest);
globalRouter.get(routes.notification);

export default globalRouter;
