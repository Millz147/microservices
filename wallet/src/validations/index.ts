import { Request } from 'express';
import Joi from 'joi';
import Validator from '../helpers/validation';

export const handleWalletDetails = (req: Request) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
  });
  return Validator.handler(schema)(req);
};
