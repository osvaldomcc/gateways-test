import { Status } from '@/modules/peripheral/domain/Peripheral';
import { object, string } from 'yup';

export const PeripheralSchema = object({
  vendor: string()
    .required()
    .matches(/[a-z]/gi, 'name must contains just letters')
    .min(2),
  date: string()
    .required()
    .matches(/\d{2}\/\d{2}\/\d{4}$/, 'date must follow the pattern mm/dd/yyyy'),
  status: string()
    .oneOf([Status.ONLINE, Status.OFFLINE], 'status must be online or offline')
    .required(),
});
