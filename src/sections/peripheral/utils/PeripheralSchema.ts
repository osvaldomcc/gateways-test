import { object, string } from 'yup';

import {
  NAME_MIN_LENGTH,
  Status,
} from '@/modules/peripheral/domain/Peripheral';
import { ErrorMessages } from '@/sections/app/utils/errors';

export const PeripheralSchema = object({
  vendor: string()
    .required()
    .matches(/[a-z]/gi, ErrorMessages.letters('vendor'))
    .min(NAME_MIN_LENGTH),
  date: string()
    .required()
    .matches(/\d{2}\/\d{2}\/\d{4}$/, ErrorMessages.date('date')),
  status: string()
    .oneOf(
      [Status.ONLINE, Status.OFFLINE],
      ErrorMessages.enum('status', Object.values(Status)),
    )
    .required(),
});
