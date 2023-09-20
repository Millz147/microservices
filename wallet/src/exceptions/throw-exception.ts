import { UnAuthenticatedException } from './auth-error';
import { BadRequestException } from './bad-request';
import { ConflictException } from './conflict-error';
import { NotFoundException } from './not-found';
import { UnAuthorizedException } from './permission-error';
import { ServerException } from './server-error';

export class ThrowException {
  public static notFound(message: string) {
    throw new NotFoundException(message);
  }

  public static badRequest(message: string): BadRequestException {
    throw new BadRequestException(message);
  }

  public static conflict(message: string): ConflictException {
    throw new ConflictException(message);
  }

  public static unAuthorized(message: string): UnAuthorizedException {
    throw new UnAuthorizedException(message);
  }

  public static unAuthenticated(message: string): UnAuthenticatedException {
    throw new UnAuthenticatedException(message);
  }
  public static serverError(): ServerException {
    throw new ServerException("");
  }
}
