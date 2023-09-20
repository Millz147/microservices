import { StatusCodes } from "http-status-codes";
import { CustomException } from "./custom-exception";

export class NotFoundException extends CustomException {
    status: number = StatusCodes.NOT_FOUND
  constructor(public message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}
