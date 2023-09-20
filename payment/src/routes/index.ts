import { Router } from 'express';
import { Utils } from '../utils';
import Payment from '../controller';
const { tryCatch } = Utils;
const Route = Router();

Route.route('/init').post(tryCatch(Payment.paymentInit));
Route.route('/webhook').post(tryCatch(Payment.paymentWebhook));
Route.route('/history').get(tryCatch(Payment.getPaymentHistory));

export default Route;
