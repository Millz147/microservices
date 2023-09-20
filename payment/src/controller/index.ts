import { RequestHandler } from "express";
import { handlePaymentInitValidation, handlePaymentWebhookValidation } from "../validations";
import { ThrowException } from "../exceptions/throw-exception";
import { Utils } from "../utils";
import PaymentServices from "../services";
const {ctrlResponse} = Utils;


export default class Payment {
  static paymentInit: RequestHandler = async (req, res, next) => {
    let { error, message } = handlePaymentInitValidation(req);
    if (error) {
      ThrowException.badRequest(message);
    }
    const response = await PaymentServices.paymentInitService(req);
    return ctrlResponse({ res, ...response });
  };
  static paymentWebhook: RequestHandler = async (req, res, next) => {
    let { error, message } = handlePaymentWebhookValidation(req);
    if (error) {
      ThrowException.badRequest(message);
    }
    const response = await PaymentServices.paymentWebhookService(req);
    return ctrlResponse({ res, ...response });
  };
  static getPaymentHistory: RequestHandler = async (req, res, next) => {
    // let { error, message } = handlePaymentWebhookValidation(req);
    // if (error) {
    //   ThrowException.badRequest(message);
    // }
    const response = await PaymentServices.getPaymentHistoryService(req);
    return ctrlResponse({ res, ...response });
  };
}