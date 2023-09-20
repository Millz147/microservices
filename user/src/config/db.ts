import { Pool } from 'pg';
import { DB_CONFIG } from './env';
export const pool = new Pool(DB_CONFIG);
