import { Request } from 'express';
import * as Joi from 'joi';
export interface IValidationResponse {
  error: boolean;
  message: string;
}
export default class Validator {
  static handler =
    (schema: Joi.ObjectSchema) =>
    (req: Request): IValidationResponse => {
      const { error, value }: any = schema.validate({
        ...req['body'],
        ...req['query'],
        ...req['params']
      });
      if (error) {
        let message = '';
        for (let err of error['details']) {
          message += `${err['message']}, `;
        }
        message = message.replace(new RegExp('"', 'g'), '').trim();

        return { error: true, message };
      }
      return { error: false, message: 'Success' };
    };
}
