export interface IPaymentInitService {
  user_id: string;
  amount: number;
  description: string;
}
export const paymentWebhook = ['success','pending','failure'] as const
export interface IPaymentWebhookService {
  event: typeof paymentWebhook[number]
  reference_id: string;
}