import { Request } from 'express';
import { IServiceResponse } from '../interfaces';
import { StatusCodes } from 'http-status-codes';
import { ThrowException } from '../exceptions/throw-exception';
import { pool } from '../config/db';

export default class UserServices {
  static getUserService = async (req: Request): Promise<IServiceResponse> => {
    const { user_id } = req.params as { user_id: string };
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [
      user_id,
    ]);

    if (!user.rows.length) {
      ThrowException.badRequest('Unrecognized User.!!!');
    }
    const data = user.rows[0];
    return {
      type: 'Success',
      status: StatusCodes.ACCEPTED,
      message: 'Success',
      data,
    };
  };
}
