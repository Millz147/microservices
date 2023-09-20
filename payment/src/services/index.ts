import { Request } from 'express';
import { IServiceResponse } from '../interfaces';
import { StatusCodes } from 'http-status-codes';
import { ThrowException } from '../exceptions/throw-exception';
import { pool } from '../config/db';
import {
  IPaymentInitService,
  IPaymentWebhookService,
} from '../interfaces/service';

export default class PaymentServices {
  static paymentInitService = async (
    req: Request
  ): Promise<IServiceResponse> => {
    const { user_id, amount, description } = req.body as IPaymentInitService;
    const reference_id = Date.now();
    const query = {
      text: 'INSERT INTO user_payments (user_id, amount, description,reference_id,status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      values: [user_id, amount, description, reference_id, 'pending'],
    };
    const result = await pool.query(query);
    const data = result.rows[0];
    return {
      type: 'Success',
      status: StatusCodes.ACCEPTED,
      message: 'Success',
      data,
    };
  };
  static paymentWebhookService = async (
    req: Request
  ): Promise<IServiceResponse> => {
    const { event, reference_id } = req.body as IPaymentWebhookService;
    const success = {
      success: true,
      pending: false,
      failure: false,
    }[event];
    const query = {
      text: 'UPDATE user_payments SET status = $1, success = $2 WHERE reference_id = $3',
      values: [event, success, reference_id],
    };
    const response = await pool.query(query);
    if (!response.rowCount) {
      ThrowException.notFound('Reference Id can not be found.!!!');
    }
    return {
      type: 'Success',
      status: StatusCodes.ACCEPTED,
      message: 'Success',
      data: [],
    };
  };
  static getPaymentHistoryService = async (
    req: Request
  ): Promise<IServiceResponse> => {
    const query = {
      text: 'SELECT * FROM user_payments ORDER BY payment_date DESC',
    };
    const result = await pool.query(query);
    const data = result.rows;
    return {
      type: 'Success',
      status: StatusCodes.ACCEPTED,
      message: 'Success',
      data,
    };
  };
}
