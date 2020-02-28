import express from "express";
import routes from "../routes";
import { bookDetail } from "../controllers/bookController";

const bookRouter = express.Router();

bookRouter.get(routes.bookDetail, bookDetail);

export default bookRouter;
