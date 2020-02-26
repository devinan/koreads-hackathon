import express from "express";
import routes from "../routes";

const bookRouter = express.Router();

bookRouter.get(routes.books);
bookRouter.get(routes.bookDetail);

export default bookRouter;
