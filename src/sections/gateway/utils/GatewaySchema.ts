import { object, string } from 'yup';

import { NAME_MIN_LENGTH } from '@/modules/gateway/domain/Gateway';
import { ErrorMessages } from '@/sections/app/utils/errors';

export const GatewaySchema = object({
  name: string()
    .required()
    .matches(/[a-z]/gi, ErrorMessages.letters('name'))
    .min(NAME_MIN_LENGTH),
  ip: string()
    .required()
    .matches(/(^(\d{1,3}\.){3}(\d{1,3})$)/, ErrorMessages.ip),
});
