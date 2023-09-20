import { RequestHandler } from 'express';
import { ThrowException } from '../exceptions/throw-exception';
import AuthServices from '../services';
import { handleLoginValidation, handleSignUpValidation } from '../validations';
import { Utils } from '../utils';
const { ctrlResponse } = Utils;

export default class Auth {
  static login: RequestHandler = async (req, res, next) => {
    let { error, message } = handleLoginValidation(req);
    if (error) {
      ThrowException.badRequest(message);
    }
    const response = await AuthServices.loginService(req);
    return ctrlResponse({ res, ...response });
  };
  static signUp: RequestHandler = async (req, res, next) => {
    let { error, message } = handleSignUpValidation(req);
    if (error) {
      ThrowException.badRequest(message);
    }
    const response = await AuthServices.signUpService(req);
    return ctrlResponse({ res, ...response });
  };
}
