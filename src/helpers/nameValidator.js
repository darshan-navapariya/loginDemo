export function nameValidator(name) {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!name) return "Name can't be empty.";
  else if (!regName.test(name))
    return 'Please enter your full name (first & last name).';
  return '';
}
