import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env';
//Access Token

/**
 * @description creates an access Token
 * @param data
 * @returns an access token
 */
export interface IAccessTokenData {
  userId: number;
  role: 'user';
}
export const signAccessToken = (data: IAccessTokenData) => {
  const token = jwt.sign(data, JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
};
/**
 * @description verify an access Token
 * @param token
 * @returns data decrypted from the access token
 */
export const verifyAccessToken = (token: string) => {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (error) {}
};

