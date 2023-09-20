import { NextFunction, Request, RequestHandler, Response } from "express";
import { IControllerResponse } from "../interfaces";
import { HTTP_CODES_RESPONSE } from "../constants/dummy";

export class Utils {
  static ctrlResponse = async ({
    res,
    status,
    message,
    data = [],
  }: IControllerResponse) => {
    return res.status(status)?.json({
      status,
      type: HTTP_CODES_RESPONSE[status],
      message,
      data,
    });
  };
  static tryCatch =
    (controller: RequestHandler) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await controller(req, res, next);
      } catch (error) {
        next(error);
      }
    };
}