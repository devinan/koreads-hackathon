import express from "express";
import routes from "../routes";

const bookmarkRouter = express.Router();

bookmarkRouter.get(routes.bookmarks);
bookmarkRouter.get(routes.bookmarkDetail);
bookmarkRouter.get(routes.deleteBookmark);

export default bookmarkRouter;
