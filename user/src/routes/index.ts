import { Router } from 'express';
import { Utils } from '../utils';
import User from '../controller';
const { tryCatch } = Utils;
const Route = Router();

Route.route('/:user_id').get(tryCatch(User.getUserDetails));


export default Route;
