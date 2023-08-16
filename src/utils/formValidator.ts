const checkMinLength = (input: string, minLength: number): boolean => {
  return input.length > minLength;
};

const checkMaxLength = (input: string, maxLength: number): boolean => {
  return input.length < maxLength;
};

const checkPhoneNumber = (input: string): boolean => {
  return input.length === 10 && /^[0-9]*$/.test(input);
};

const checkEmail = (input: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.toLowerCase()
  );
};

export const Validator = {
  checkMinLength,
  checkMaxLength,
  checkPhoneNumber,
  checkEmail,
};
