export function confirmPasswordValidator(firstPassword, secondPassword) {
  console.log(firstPassword, secondPassword);
  if (firstPassword !== secondPassword)
    return 'Password and Confirm password should be same.';
  return '';
}
