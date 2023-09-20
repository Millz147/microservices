import { Request } from 'express';
import { IServiceResponse } from '../interfaces';
import { StatusCodes } from 'http-status-codes';
import { ThrowException } from '../exceptions/throw-exception';
import { pool } from '../config/db';
import Cipher from '../helpers/cipher';
import { signAccessToken } from '../helpers/accessToken';
import { ILoginService, ISignUpService } from '../interfaces/auth';

export default class Auth {
  static loginService = async (req: Request): Promise<IServiceResponse> => {
    const { username, password } = req.body as ILoginService;
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [
      username,
    ]);
    if (user.rows.length === 0) {
      ThrowException.notFound('Incorrect Username.!!!');
    }
    const passwordMatch = await Cipher.decrypt({
      value: password,
      hash: user.rows[0].password_hash,
    });
    if (!passwordMatch) {
      ThrowException.badRequest('Incorrect Passowrd.!!!');
    }
    const token = signAccessToken({ userId: user.rows[0].id, role: 'user' });

    return {
      type: 'Success',
      status: StatusCodes.ACCEPTED,
      message: 'User Login Success',
      data: { token },
    };
  };
  static signUpService = async (
    req: Request
  ): Promise<IServiceResponse> => {
    const { username, password, email } = req.body as ISignUpService;
    const userExists = await pool.query(
      'SELECT * FROM users WHERE username = $1 OR email = $2',
      [username, email]
    );
    if (userExists.rows.length > 0) {
      ThrowException.conflict('User already exists');
    }

    const saltRounds = 10;
    const hashedPassword = await Cipher.encrypt(password);
    await pool.query(
      'INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3)',
      [username, hashedPassword, email]
    );

    return {
      type: 'Success',
      status: StatusCodes.ACCEPTED,
      message: 'User Login Success',
      data: [],
    };
  };
}
