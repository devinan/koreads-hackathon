import express from "express";
import routes from "../routes";
import { home, search, start } from "../controllers/bookController";
import { bookmarks } from "../controllers/bookmarkController";
import { requests } from "../controllers/requestController";
import { notification, settings, help } from "../controllers/settingController";
import { join, interest, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.bookmarks, bookmarks);
globalRouter.get(routes.help, help);
globalRouter.get(routes.join, join);
globalRouter.get(routes.interest, interest);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.notification, notification);
globalRouter.get(routes.requests, requests);
globalRouter.get(routes.search, search);
globalRouter.get(routes.settings, settings);
globalRouter.get(routes.start, start);

export default globalRouter;
