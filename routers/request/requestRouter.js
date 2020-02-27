import express from "express";
import routes from "../../routes";

const requestRouter = express.Router();

requestRouter.get(routes.home);
requestRouter.get(routes.requestDetail);
requestRouter.get(routes.uploadRequest);
requestRouter.get(routes.nextRequest);
requestRouter.get(routes.finishRequest);

export default requestRouter;
