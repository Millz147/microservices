import { StatusCodes } from "http-status-codes";
import { CustomException } from "./custom-exception";

export class UnAuthenticatedException extends CustomException {
    status: number = StatusCodes.UNAUTHORIZED
  constructor(public message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
