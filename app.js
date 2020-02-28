import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import bookmarkRouter from "./routers/bookmarkRouter";
import bookRouter from "./routers/bookRouter";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import requestRouter from "./routers/requestRouter";

const app = express();

app.set("view engine", "pug");
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.bookmarks, bookmarkRouter);
app.use(routes.books, bookRouter);
app.use(routes.home, globalRouter);
app.use(routes.requests, requestRouter);
app.use(routes.users, userRouter);

export default app;
