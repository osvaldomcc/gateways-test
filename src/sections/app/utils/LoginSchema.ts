import { object, string } from 'yup';

export const LoginSchema = object({
  name: string()
    .required()
    .matches(/[a-z]/gi, 'name must contains just letters')
    .min(2),
});
