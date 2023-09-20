import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT!;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const DB_CONFIG = {
  user: process.env.DB_USER!,
  host: process.env.DB_HOST!,
  database: process.env.DB!,
  password: process.env.DB_PASS!,
  port: Number(process.env.DB_PORT!),
};
