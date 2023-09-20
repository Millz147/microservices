import { StatusCodes } from "http-status-codes";
import { CustomException } from "./custom-exception";

export class BadRequestException extends CustomException {
  status: number = StatusCodes.BAD_REQUEST;
  constructor(public message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
