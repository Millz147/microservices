import { Router } from 'express';
import { Utils } from '../utils';
import Auth from '../controller';
const { tryCatch } = Utils;
const Route = Router();

Route.route('/login').post(tryCatch(Auth.login));
Route.route('/signup').post(tryCatch(Auth.signUp));

export default Route;
