import express from "express";
import routes from "../routes";
import { join, interest, login, logout } from "../controllers/userController";
import { home, search, start } from "../controllers/bookController";
import { notification, settings } from "../controllers/settingController";

const globalRouter = express.Router();

globalRouter.get(routes.home);
globalRouter.get(routes.help);
globalRouter.get(routes.join);
globalRouter.get(routes.interest);
globalRouter.get(routes.login);
globalRouter.get(routes.logout);
globalRouter.get(routes.notification);
globalRouter.get(routes.requests);
globalRouter.get(routes.search);
globalRouter.get(routes.settings);
globalRouter.get(routes.start);

export default globalRouter;
