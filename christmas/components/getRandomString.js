
export const getRandomString = () => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const randomNumb = '0123456789';
  let result = '';
  for ( let i = 0; i < 4; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  for ( let i = 0; i < 4; i++ ) {
    result += randomNumb.charAt(Math.floor(Math.random() * randomNumb.length));
}
  return result
}
