import { Router } from 'express';
import { Utils } from '../utils';
import Wallet from '../controller';
const { tryCatch } = Utils;
const Route = Router();

Route.route('/:user_id').get(tryCatch(Wallet.getWalletDetails));


export default Route;
