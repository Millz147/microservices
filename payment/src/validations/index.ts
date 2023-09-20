import { Request } from 'express';
import Joi from 'joi';
import Validator from '../helpers/validation';
import { paymentWebhook } from '../interfaces/service';

export const handlePaymentInitValidation = (req: Request) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    amount: Joi.number().required(),
    desciption:Joi.string(),
  });
  return Validator.handler(schema)(req);
};
export const handlePaymentWebhookValidation = (req: Request) => {
  const schema = Joi.object({
    event: Joi.string()
      .valid(...paymentWebhook)
      .required(),
    reference_id: Joi.string().required(),
  });
  return Validator.handler(schema)(req);
};
