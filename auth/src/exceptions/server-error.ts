import { StatusCodes } from "http-status-codes";
import { CustomException } from "./custom-exception";

export class ServerException extends CustomException {
  status: number = StatusCodes.INTERNAL_SERVER_ERROR
  constructor(public message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
