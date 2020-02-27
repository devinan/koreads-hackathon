import express from "express";
import routes from "../routes";
import { join, interest, login, logout } from "../controllers/userController";
import { home, search, start } from "../controllers/bookController";
import { notification, settings } from "../controllers/settingController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.interest, interest);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.notification, notification);
globalRouter.get(routes.search, search);
globalRouter.get(routes.settings, settings);
globalRouter.get(routes.start, start);

export default globalRouter;
