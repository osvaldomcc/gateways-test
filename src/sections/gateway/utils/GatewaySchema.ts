import { object, string } from 'yup';

export const GatewaySchema = object({
  name: string()
    .required()
    .matches(/[a-z]/gi, 'name must contains just letters')
    .min(2),
  ip: string()
    .required()
    .matches(/(^(\d{1,3}\.){3}(\d{1,3})$)/, 'is not a valid ip'),
});
