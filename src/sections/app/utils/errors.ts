export const ErrorMessages = {
  letters: (field: string) => `${field} must contains just letters`,
  ip: 'is not a valid ip',
  date: (field: string, format = 'mm/dd/yyyy') =>
    `${field} must follow the pattern ${format}`,
  enum: (field: string, options: string[]) =>
    `${field} must be ${options.join(' or ')}`,
  minLength: (field: string, minLenght: number) =>
    `${field} must be at least ${minLenght} characters`,
};
