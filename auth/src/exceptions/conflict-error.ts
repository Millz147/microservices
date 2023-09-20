import { StatusCodes } from "http-status-codes";
import { CustomException } from "./custom-exception";

export class ConflictException extends CustomException {
    status: number = StatusCodes.CONFLICT
  constructor(public message: string) {
    super(message, StatusCodes.CONFLICT);
  }
}
