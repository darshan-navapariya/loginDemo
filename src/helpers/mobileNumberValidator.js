export function mobileNumberValidator(mobileNumber) {
  var mobileNumberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (!mobileNumber) return "Mobile number can't be empty.";
  if (!mobileNumberRegex.test(mobileNumber))
    return 'Enter valid mobile number.';
  return '';
}
