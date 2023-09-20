import { RequestHandler } from 'express';
import { handleWalletDetails } from '../validations';
import { ThrowException } from '../exceptions/throw-exception';
import { Utils } from '../utils';
import PaymentServices from '../services';
import WalletServices from '../services';
const { ctrlResponse } = Utils;

export default class User {
  static getWalletDetails: RequestHandler = async (req, res, next) => {
    let { error, message } = handleWalletDetails(req);
    if (error) {
      ThrowException.badRequest(message);
    }
    const response = await WalletServices.getWalletDetailsService(req);
    return ctrlResponse({ res, ...response });
  };
}
