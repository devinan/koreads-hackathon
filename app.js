import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get(routes.start, (req, res) => res.send("Start"));
app.get(routes.home, (req, res) => res.send("Home"));
app.get(routes.join, (req, res) => res.send("Join"));
app.get(routes.login, (req, res) => res.send("Login"));
app.get(routes.logout, (req, res) => res.send("Logout"));
app.get(routes.search, (req, res) => res.send("Search"));
// users;
// userDetail;
// editProfile;
// changePassword;
// settings;
// interest;
// notification;
// requests;
// uploadRequest;
// requestDetail;
// nextRequest;
// finishRequest;
// books;
// bookDetail;
// bookmarks;
// bookmarkDetail;
// deleteBookmark;
export default app;
