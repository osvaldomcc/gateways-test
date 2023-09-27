import { object, string } from 'yup';

import { NAME_MIN_LENGTH } from '@/modules/gateway/domain/Gateway';
import { ErrorMessages } from '@/sections/app/utils/errors';

export const LoginSchema = object({
  name: string()
    .required()
    .matches(/[a-z]/gi, ErrorMessages.letters('name'))
    .min(NAME_MIN_LENGTH),
});
