// Palindrome
function Palindrome(str){
  const pal = str.split('').reverse().join('');
  if(pal == str) return 'Yes it is';
  else return 'No it is not';
}

Palindrome('amin')