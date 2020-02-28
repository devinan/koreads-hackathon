import express from "express";
import routes from "../routes";
import {
  bookmarkDetail,
  deleteBookmark
} from "../controllers/bookmarkController";

const bookmarkRouter = express.Router();

bookmarkRouter.get(routes.bookmarkDetail, bookmarkDetail);
bookmarkRouter.get(routes.deleteBookmark, deleteBookmark);

export default bookmarkRouter;
