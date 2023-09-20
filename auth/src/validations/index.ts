import { Request } from 'express';
import Joi from 'joi';
import Validator from '../helpers/validation';

export const handleLoginValidation = (req: Request) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  return Validator.handler(schema)(req);
};
export const handleSignUpValidation = (req: Request) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  return Validator.handler(schema)(req);
};
