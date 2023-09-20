import { Request } from 'express';
import { IServiceResponse } from '../interfaces';
import { StatusCodes } from 'http-status-codes';
import { ThrowException } from '../exceptions/throw-exception';
import { pool } from '../config/db';

export default class WalletServices {
  static getWalletDetailsService = async (
    req: Request
  ): Promise<IServiceResponse> => {
    const { user_id } = req.params;
    const query = {
      text: 'SELECT * FROM user_wallets WHERE user_id = $1',
      values: [user_id],
    };

    const result = await pool.query(query);

    if (!result.rows.length) {
      ThrowException.notFound('Wallet Not Found');
    }

    const data = result.rows[0];
    return {
      type: 'Success',
      status: StatusCodes.ACCEPTED,
      message: 'Success',
      data,
    };
  };
}
