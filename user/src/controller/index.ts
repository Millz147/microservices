import { RequestHandler } from 'express';
import {
    handleGetUserDetails,
} from '../validations';
import { ThrowException } from '../exceptions/throw-exception';
import { Utils } from '../utils';
import PaymentServices from '../services';
import UserServices from '../services';
const { ctrlResponse } = Utils;

export default class User {
  static getUserDetails: RequestHandler = async (req, res, next) => {
    let { error, message } = handleGetUserDetails(req);
    if (error) {
      ThrowException.badRequest(message);
    }
    const response = await UserServices.getUserService(req);
    return ctrlResponse({ res, ...response });
  };

}
