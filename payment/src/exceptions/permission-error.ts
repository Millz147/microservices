import { StatusCodes } from "http-status-codes";
import { CustomException } from "./custom-exception";

export class UnAuthorizedException extends CustomException {
    status: number = StatusCodes.FORBIDDEN
  constructor(public message: string) {
    super(message, StatusCodes.FORBIDDEN);
  }
}
