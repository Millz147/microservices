import { Response } from "express";

export interface IServiceResponse {
  type: 'Success' | 'Error';
  status: number;
  message: string;
  data?: any;
}
export interface IControllerResponse {
  res: Response;
  status: number;
  message: string;
  data?: any;
}
