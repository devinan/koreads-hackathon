import express from "express";
import routes from "../routes";
import {
  bookmarks,
  bookmarkDetail,
  deleteBookmark
} from "../controllers/bookmarkController";

const bookmarkRouter = express.Router();

bookmarkRouter.get(routes.bookmarks, bookmarks);
bookmarkRouter.get(routes.bookmarkDetail, bookmarkDetail);
bookmarkRouter.get(routes.deleteBookmark, deleteBookmark);

export default bookmarkRouter;
