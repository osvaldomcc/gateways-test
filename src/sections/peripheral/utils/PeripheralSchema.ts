import { object, string } from 'yup';

import {
  NAME_MIN_LENGTH,
  Status,
} from '@/modules/peripheral/domain/Peripheral';
import { ErrorMessages } from '@/sections/app/utils/errors';

export const PeripheralSchema = object({
  vendor: string()
    .required()
    .matches(/[^0-9]$/g, ErrorMessages.letters('vendor'))
    .min(NAME_MIN_LENGTH),
  date: string()
    .required()
    .matches(
      /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/(19|20|30)\d\d$/,
      ErrorMessages.date('date'),
    ),
  status: string()
    .oneOf(
      [Status.ONLINE, Status.OFFLINE],
      ErrorMessages.enum('status', Object.values(Status)),
    )
    .required(),
});
