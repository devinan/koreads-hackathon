import express from "express";
import routes from "../routes";
import {
  requestDetail,
  uploadRequest,
  nextRequest,
  finishRequest
} from "../controllers/requestController";

const requestRouter = express.Router();

requestRouter.get(routes.requestDetail, requestDetail);
requestRouter.get(routes.uploadRequest, uploadRequest);
requestRouter.get(routes.nextRequest, nextRequest);
requestRouter.get(routes.finishRequest, finishRequest);

export default requestRouter;
