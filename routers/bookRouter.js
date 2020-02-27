import express from "express";
import routes from "../routes";
import { books, bookDetail } from "../controllers/bookController";

const bookRouter = express.Router();

bookRouter.get(routes.books, books);
bookRouter.get(routes.bookDetail, bookDetail);

export default bookRouter;
