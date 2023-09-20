import { ErrorRequestHandler } from 'express';
import { Utils } from '../utils';
import { StatusCodes } from 'http-status-codes';

const { ctrlResponse } = Utils;

export const errorHandler: ErrorRequestHandler = async (
  err,
  req,
  res,
  next
) => {
  console.log(err)
  const serverError = 'An Error Occur, please try again';
  if (!err?.['status']) {
    return ctrlResponse({
      res,
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: serverError,
      data: [],
    });
  } else {
    return ctrlResponse({
      res,
      status: err['status'],
      message: err['message'] ?? serverError,
      data: [],
    });
  }
};
