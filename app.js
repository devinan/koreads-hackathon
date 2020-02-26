import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import helpRouter from "./routers/helpRouter";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.help, helpRouter);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);

export default app;
